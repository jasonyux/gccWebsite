const LATEST = 3;

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const timestamp = urlParams.get('timestamp');

var event_list;
// changed path due to deployment
fetch('/cu/gcc/assets/sample_events.json')
.then(res => res.json())
.then(data => {
    event_list = data;
    create_event_page(data[timestamp]);
}).catch(err => console.log("fetch json failed", err))

function get_latest_event() {
    let events = [];
    for (let timestamp in event_list)
        events.push(timestamp);
    events.sort();

    return events.length <= LATEST ? events : events.slice(0,LATEST);
}

function create_event_page(info){
    // Render Current Event
    if (info){
        var large_title = document.getElementById("large-title");
        large_title.textContent=info.title;
        
        var small_title = document.getElementById("small-title");
        small_title.textContent=info.title;

        var main_text = document.getElementById("main-text");
        main_text.textContent = info.text;

        var thumb_nail = document.getElementById('thumbnail');
        thumb_nail.src = info.thumb_nail;

        var prev_event = document.getElementById('prev-event');
        prev_event.href = `./portfolio-single.html?timestamp=${info.prev}`;

        var next_event = document.getElementById('next-event');
        next_event.href = `./portfolio-single.html?timestamp=${info.next}`
    }
    
    // Render Latest Projects
    var latest_projects = document.getElementById('latest-projects');
    var latest_timestamps = get_latest_event();
    for(let i=0; i<latest_projects.children.length; i++){
        var project = latest_projects.children[i]; // gets the div "<div class="col-md-4 item">"
        project.children[0].href = `/cu/gcc/gcc_events/portfolio-single.html?timestamp=${latest_timestamps[i]}`;
        project.children[0].children[0].src = event_list[latest_timestamps[i]].thumb_nail;
        project.children[1].href = `/cu/gcc/gcc_events/portfolio-single.html?timestamp=${latest_timestamps[i]}`;
        project.children[1].children[0].textContent = event_list[latest_timestamps[i]].title;
    }
}
