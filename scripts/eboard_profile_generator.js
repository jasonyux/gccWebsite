import insert_profiles from './profile_generator.js';

var eboard_list;

fetch('../assets/e-board.json')
  .then(res => res.json())
  .then(data => {
      eboard_list = data.e_board;
      insert_profiles('eboard-profile',eboard_list);
  })
  .catch(err => console.log("fetch json failed", err))
