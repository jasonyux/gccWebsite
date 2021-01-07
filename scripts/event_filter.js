function filter_events(filter=''){
    var event_profiles = document.getElementById("event-profile").getElementsByTagName('div');
    for (let profile of event_profiles)
        profile.style.display = profile.className.includes(filter) ? '' : 'none';
}