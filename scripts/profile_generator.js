export default function insert_profiles(containerID, list, wrapper) {
  var teamGridDiv = document.getElementById(containerID);
  for(let info of list){
      teamGridDiv.appendChild(wrapper(info));
  }
}