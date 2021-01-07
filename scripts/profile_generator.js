var info_list;

fetch('../assets/e-board.json')
  .then(res => res.json())
  .then(data => {
      info_list = data.e_board;
      console.log("Success!", info_list);
      insert_profiles();
  })
  .catch(err => console.log("fetch json failed", err))

/* generates and returns a div element from info (image, name, position, description) */
function create_profile(info){
  var profile_card = document.createElement("div");
  profile_card.className = "col-sm-12 col-md-6 col-lg-4 item";

  var image_team = document.createElement("div");
  image_team.className = "image-team";

  var profile_image = document.createElement("img");
  profile_image.src = `${info.image}`;

  var hover = document.createElement("div");
  hover.className = "hover";

  var description = document.createElement("p");
  description.className = "description";
  description.innerHTML = `${info.description}`;

  // var social = document.createElement("div");
  // ignored social links
  var position = document.createElement("p");
  position.className = "position";
  position.textContent = `${info.role}`;

  var profile_name = document.createElement("h4");
  profile_name.className = "name";
  profile_name.textContent = `${info.name}`;

  profile_card.appendChild(image_team);
  image_team.appendChild(profile_image);
  image_team.appendChild(hover);
  hover.appendChild(description);
  profile_card.appendChild(position);
  profile_card.appendChild(profile_name);

  return profile_card;
}

function insert_profiles() {
  var teamGridDiv = document.getElementById("eboard-profile");
  for(let info of info_list){
      teamGridDiv.appendChild(create_profile(info));
  }
}