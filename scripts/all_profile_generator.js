import insert_profiles from './profile_generator.js';

var eboard_list, ocm_list;

fetch('../assets/e-board.json')
  .then(res => res.json())
  .then(data => {
      eboard_list = data.e_board;
      ocm_list = data.ocm;
      insert_profiles('eboard-profile',eboard_list);
      insert_profiles('ocm-profile',ocm_list);
  })
  .catch(err => console.log("fetch json failed", err))