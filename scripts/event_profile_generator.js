import insert_profiles,{production_root} from './profile_generator.js';

/* generates and returns a div element from info (image, name, position, description) */
function create_profile(info) {
    var event_card = document.createElement("div");
    var invovled_teams = info.type.join(' ');
    event_card.className = `col-6 col-md-6 col-lg-3 item ${invovled_teams}`

    var event_img = document.createElement("img");
    event_img.src = `${production_root}${info["image_url"]}`;

    var anchor = document.createElement("a");
    anchor.href = `${production_root}${info["content_url"]}`;
    anchor.className = "hover";

    var title = document.createElement("h5");
    title.className = "title";
    title.textContent = `${info.name}`;

    var teams = document.createElement("p");
    teams.className = "cat";
    teams.textContent = `${invovled_teams}`;

    event_card.appendChild(event_img);
    event_card.appendChild(anchor);
    anchor.appendChild(title);
    anchor.appendChild(teams);

    return event_card;
}

fetch('assets/events.json')
    .then(res => res.json())
    .then(data => {
        var full_container = document.getElementById("event-full-container");
        var event_container = document.createElement("div");
        event_container.className="row masonry-grid";
        event_container.id="event-profile";
        full_container.appendChild(event_container);
        insert_profiles('event-profile', data, create_profile);
    })
    .catch(err => console.log("fetch json failed", err))
