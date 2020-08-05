import NAVBAR from '../components/navbar.js';
import MODAL from '../components/modal.js'
import FOOTER from '../components/footer.js';
import MODAL_TEAM_DETAIL from '../components/modal-generator.js';
import {HOMEPAGE_DATA, TEAMPAGE_DATA} from './api.js'

import CONTENT_LOADER from './contentLoader.js';

let mainTag = document.getElementsByTagName('main')[0];
let dataShow = '';
let objectData = {};
let modalData = {};


// modal event
const modalClickEvent = () => {
  
  const detailButton = document.querySelectorAll('.modal-trigger');
  const instance = M.Modal.getInstance(detailButton);
  const detailTeam = document.querySelectorAll(".detail-team");

  for(let i = 0; i < detailTeam.length; i++) {
    detailTeam[i].addEventListener("click", function(e) {
      e.preventDefault();
      for(let i = 0; i < dataShow.length; i++) {
        if(dataShow[i].name == e.target.dataset.teamName){
          objectData = {
            name: dataShow[i].name,
            tla: dataShow[i].tla,
            address: dataShow[i].address,
            crestUrl: dataShow[i].crestUrl,
            phone: dataShow[i].phone,
            website: dataShow[i].website,
            email: dataShow[i].email,
            founded: dataShow[i].founded,
            clubColors: dataShow[i].clubColors
          }
        }
      }
      // generate data into modal
      MODAL_TEAM_DETAIL(objectData);
      // modal data for saving into indexeddb
      modalData = objectData;
    });
  };
}

const getHomepageData = () => {
  let dataShow = '';
  HOMEPAGE_DATA().then((data) => {
    dataShow = JSON.parse(data);
    mainTag.innerHTML = CONTENT_LOADER("homepage", dataShow);
  });
};

const getSavepageData = () => {
  getAllTeam().then(function(data) {
    console.log(data);
    mainTag.innerHTML = CONTENT_LOADER("savedteam", data);
    console.log(dataShow);

    modalClickEvent();
  });
};

const getTeamListData = () => {
  TEAMPAGE_DATA().then((data) => {
    dataShow = JSON.parse(data);
    dataShow = dataShow.teams;
    mainTag.innerHTML = CONTENT_LOADER("teamlist", dataShow);
    console.log(dataShow);

    modalClickEvent();
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
    getSavepageData();
  } else {
    mainTag.innerHTML =  CONTENT_LOADER("homepage", "empty");
    getHomepageData();
  }
}, false)

