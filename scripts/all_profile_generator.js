import insert_profiles from './profile_generator.js';

var eboard_list, ocm_list;

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

fetch('../assets/e-board.json')
  .then(res => res.json())
  .then(data => {
      eboard_list = data.e_board;
      ocm_list = data.ocm;
      insert_profiles('eboard-profile',eboard_list, create_profile);
      insert_profiles('ocm-profile',ocm_list, create_profile);
  })
  .catch(err => console.log("fetch json failed", err))