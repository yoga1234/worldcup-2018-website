import NAVBAR from '../components/navbar.js';
import FOOTER from '../components/footer.js';
import {HOMEPAGE_DATA, TEAMPAGE_DATA} from './api.js'

import CONTENT_LOADER from './contentLoader.js';

let mainTag = document.getElementsByTagName('main')[0];

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
        console.log(e.target.dataset.target);
        for(let i = 0; i < dataShow.teams.length; i++) {
          if(dataShow.teams[i].name == e.target.dataset.target){
            objectData = {
              name: dataShow.teams[i].name,
              tla: dataShow.teams[i].tla,
              address: dataShow.teams[i].address,
              phone: dataShow.teams[i].phone,
              website: dataShow.teams[i].website,
              email: dataShow.teams[i].email,
              founded: dataShow.teams[i].founded,
              clubColors: dataShow.teams[i].clubColors
            }
          }
        }
        console.info(objectData);
      });
    };
  });
};

const modalTeamDetail = () => {

}

document.addEventListener('DOMContentLoaded', function() {
  document.body.insertAdjacentHTML("afterbegin", NAVBAR);
  document.body.insertAdjacentHTML("beforeend", FOOTER);

  // initial page
  mainTag.innerHTML = CONTENT_LOADER("homepage", "empty");
  getHomepageData();

  // initialization navbar
  const navbarElems = document.querySelectorAll('.sidenav');
  const navbarInstances = M.Sidenav.init(navbarElems, {});
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

