import NAVBAR from '../components/navbar.js';
import MODAL from '../components/modal.js'
import FOOTER from '../components/footer.js';
import MODAL_TEAM_DETAIL from '../components/modal-generator.js';
import {HOMEPAGE_DATA, TEAMPAGE_DATA} from './api.js'

import CONTENT_LOADER from './contentLoader.js';

let mainTag = document.getElementsByTagName('main')[0];
let modalData = {}

const getHomepageData = () => {
  let dataShow = '';
  HOMEPAGE_DATA().then((data) => {
    dataShow = JSON.parse(data);
    mainTag.innerHTML = CONTENT_LOADER("homepage", dataShow);
  });
};

const getTeamListData = () => {
  let dataShow = '';
  let objectData = {};
  TEAMPAGE_DATA().then((data) => {
    dataShow = JSON.parse(data);
    mainTag.innerHTML = CONTENT_LOADER("teamlist", dataShow);

    const detailButton = document.querySelectorAll('.modal-trigger');
    const instance = M.Modal.getInstance(detailButton);
    const detailTeam = document.querySelectorAll(".detail-team");

    for(let i = 0; i < detailTeam.length; i++) {
      detailTeam[i].addEventListener("click", function(e) {
        e.preventDefault();
        for(let i = 0; i < dataShow.teams.length; i++) {
          if(dataShow.teams[i].name == e.target.dataset.teamName){
            objectData = {
              name: dataShow.teams[i].name,
              tla: dataShow.teams[i].tla,
              address: dataShow.teams[i].address,
              crestUrl: dataShow.teams[i].crestUrl,
              phone: dataShow.teams[i].phone,
              website: dataShow.teams[i].website,
              email: dataShow.teams[i].email,
              founded: dataShow.teams[i].founded,
              clubColors: dataShow.teams[i].clubColors
            }
          }
        }
        MODAL_TEAM_DETAIL(objectData);
        modalData = objectData;
      });
    };
  });
};

document.addEventListener('DOMContentLoaded', function() {
  document.body.insertAdjacentHTML("afterbegin", NAVBAR);
  document.body.insertAdjacentHTML("beforeend", MODAL);
  document.body.insertAdjacentHTML("beforeend", FOOTER);

  // initial page
  mainTag.innerHTML = CONTENT_LOADER("homepage", "empty");
  getHomepageData();

  // initialization navbar
  const navbarElems = document.querySelectorAll('.sidenav');
  const navbarInstances = M.Sidenav.init(navbarElems, {});

  // modal
  let modalElem = document.querySelectorAll('.modal');
  let modalInstances = M.Modal.init(modalElem, {
    preventScrolling: true,
  });
  // close modal button
  let modalClose = document.querySelector(".close-modal-btn");
  modalClose.addEventListener("click", function(e) {
    e.preventDefault();
    // document.querySelector(".modal-content").scrollTop = 0;
    M.Modal.getInstance(modalElem[0]).close();
  });

  // modal save button
  let modalSave = document.querySelector(".save-modal-btn");
  modalSave.addEventListener("click", function(e) {
    console.log("Tombol save telah di klik.")
    console.log(modalData);
    saveTeamData(modalData);
  });
});



// changing the content
window.addEventListener('hashchange', function() {
  if(location.hash === "#teamlist") {
    mainTag.innerHTML =  CONTENT_LOADER("teamlist", "empty");
    getTeamListData();
  } else if(location.hash === "#savedteam") {
    mainTag.innerHTML = CONTENT_LOADER("savedteam", "empty");
  } else {
    mainTag.innerHTML =  CONTENT_LOADER("homepage", "empty");
    getHomepageData();
  }
}, false)

