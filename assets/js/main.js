import NAVBAR from '../components/navbar.js';
import MODAL from '../components/modal.js'
import FOOTER from '../components/footer.js';
import MODAL_TEAM_DETAIL from '../components/modal-generator.js';
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
      });
    };
  });
};

// const modalTeamDetail = (teamData) => {
//   let countryFlag = document.querySelector(".modal-flag-image");
//   let teamName = document.querySelector(".team-name");
//   let teamTla = document.querySelector(".team-tla");
//   let teamAddress = document.querySelector(".team-address");
//   let teamPhone = document.querySelector(".team-phone");
//   let teamWebsite = document.querySelector(".team-website");
//   let teamEmail = document.querySelector(".team-email");
//   let teamFounded = document.querySelector(".team-founded");
//   let teamColors = document.querySelector(".team-colors");

//   // check for country flag
//   if(teamData.crestUrl == null || teamData.crestUrl == "") {
//     teamData.crestUrl = './assets/images/not-found.svg';
//   }

//   // check for email
//   if(teamData.email == null || teamData.email == "") {
//     teamEmail.innerHTML = "Email: <i>Email not available</i>";
//   } else {
//     teamEmail.innerHTML = "Email: <strong>" + teamData.email + "</strong>";
//   }

//   countryFlag.src = teamData.crestUrl;
//   teamName.innerHTML = "Name: <strong>" + teamData.name + "</strong>";
//   teamTla.innerHTML = "Tla: <strong>" + teamData.tla + "</strong>";
//   teamAddress.innerHTML = "Address: <strong>" + teamData.address + "</strong>";
//   teamPhone.innerHTML = "Phone: <strong>" + teamData.phone + "</strong>";
//   teamWebsite.innerHTML = "Website: <strong>" + teamData.website + "</strong>";
//   teamFounded.innerHTML = "Founded: <strong>" + teamData.founded + "</strong>";
//   teamColors.innerHTML = "Club Colors: <strong>" + teamData.clubColors + "</strong>";
// }

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
  let modalClose = document.querySelector(".close-modal-btn");
  modalClose.addEventListener("click", function(e) {
    e.preventDefault();
    // document.querySelector(".modal-content").scrollTop = 0;
    console.log(document.querySelector(".modal-content").scrollTop);
    M.Modal.getInstance(modalElem[0]).close();
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

