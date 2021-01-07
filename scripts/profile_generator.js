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

export default function insert_profiles(containerID, list) {
  var teamGridDiv = document.getElementById(containerID);
  for(let info of list){
      teamGridDiv.appendChild(create_profile(info));
  }
}