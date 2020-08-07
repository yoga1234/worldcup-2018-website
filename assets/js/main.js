import NAVBAR from '../components/navbar.js';
import MODAL from '../components/modal.js'
import FOOTER from '../components/footer.js';
import MODAL_TEAM_DETAIL from '../components/modal-generator.js';
import {HOMEPAGE_DATA, TEAMPAGE_DATA} from './api.js'

import CONTENT_LOADER from './contentLoader.js';

let mainTag = document.getElementsByTagName('main')[0];
let dataShow = ''; // first initial data
let objectData = {}; // data used for modal
let modalData = {}; // for saving data

// modal event
const modalClickEvent = (page) => {
  
  const detailButton = document.querySelectorAll('.modal-trigger');
  const instance = M.Modal.getInstance(detailButton);
  const detailTeam = document.querySelectorAll(".detail-team");

  for(let i = 0; i < detailTeam.length; i++) {
    detailTeam[i].addEventListener("click", function(e) {
      e.preventDefault();
      for(let i = 0; i < dataShow.length; i++) {
        if(dataShow[i].name == e.target.dataset.teamName.split("|")[0]){
          objectData = {
            id: dataShow[i].id,
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
      // check if data exists first
      checkData(objectData.id)
      .then(function(resolve) {
        MODAL_TEAM_DETAIL(objectData, page, resolve)
      })
      // modal data for saving into indexeddb
      modalData = objectData;
    });
  };
}

const getHomepageData = () => {
  // check if data already exists in the indexeddb
  getIndexHomeData()
    .then(function(response) {
      if(response == undefined) {
        console.log("data homepage belum ada di database");
        // getting data from API
        HOMEPAGE_DATA()
        .then((data) => {
          dataShow = JSON.parse(data);
          dataShow = {
            name: dataShow.name,
            code: dataShow.code,
            stage: dataShow.area.name,
            start: dataShow.currentSeason.startDate,
            end: dataShow.currentSeason.endDate,
          };
          // save data into database
          saveHomepageData(dataShow);
          mainTag.innerHTML = CONTENT_LOADER("homepage", dataShow);
        })
        .catch((err) => {
          // HOMEPAGE_DATA error
          console.log("Offline mode");
          mainTag.innerHTML = CONTENT_LOADER("homepage", "database");
        });
      } else {
        console.log("data ada di database");
        mainTag.innerHTML = CONTENT_LOADER("homepage", response);
      }
    })  
    .catch(function(err) {
      // getIndexData error
      console.log("Oops terjadi error: " + err);
    })
};

const getSavepageData = () => {
  getAllTeam().then(function(data) {
    dataShow = data;
    console.log("data: " + data);
    console.log("dataShow: " + dataShow);

    mainTag.innerHTML = CONTENT_LOADER("savedteam", data);

    modalClickEvent("savedteam");
  });
};

const getTeamListData = () => {
  TEAMPAGE_DATA().then((data) => {
    dataShow = JSON.parse(data);
    dataShow = dataShow.teams;
    mainTag.innerHTML = CONTENT_LOADER("teamlist", dataShow);

    modalClickEvent("teamlist");
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
    M.Modal.getInstance(modalElem[0]).close();
  });

  // modal save button
  let modalSave = document.querySelector(".save-modal-btn");
  modalSave.addEventListener("click", function(e) {
    if(e.target.innerText == "SAVE TEAM") {
      saveTeamData(modalData)
      .then(function() {
        M.toast({html: "Team Berhasil disimpan"});
        modalSave.classList.add("disabled");
        modalSave.innerHTML = "Loading...";
        checkData(objectData.id)
        .then(function(resolve) {
          if(resolve != undefined) {
            modalSave.innerHTML = "Success Adding to Saved."
          }
        })
      }).catch(function(err) {
        console.log("error: " + err);
      });
    } else {
      deleteTeam(objectData.id)
      .then(function(resolve) {
        M.Modal.getInstance(modalElem[0]).close();
        getSavepageData();
        M.toast({html: resolve});

      })
    }
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

