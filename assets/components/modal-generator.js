const MODAL_TEAM_DETAIL = (teamData, page) => {
  let countryFlag = document.querySelector(".modal-flag-image");
  let teamName = document.querySelector(".team-name");
  let teamTla = document.querySelector(".team-tla");
  let teamAddress = document.querySelector(".team-address");
  let teamPhone = document.querySelector(".team-phone");
  let teamWebsite = document.querySelector(".team-website");
  let teamEmail = document.querySelector(".team-email");
  let teamFounded = document.querySelector(".team-founded");
  let teamColors = document.querySelector(".team-colors");
  let modalDynamicButton = document.getElementById("modal-dynamic-btn");

  if(page == "savedteam") {
    modalDynamicButton.classList.remove("indigo");
    modalDynamicButton.classList.add("red");
    modalDynamicButton.innerText ="Remove From saved";
  } else {
    modalDynamicButton.classList.remove("red");
    modalDynamicButton.classList.add("indigo");
    modalDynamicButton.innerText = "Save Team";
  }

  // check for country flag
  if(teamData.crestUrl == null || teamData.crestUrl == "") {
    teamData.crestUrl = './assets/images/not-found.svg';
  }

  // check for email
  if(teamData.email == null || teamData.email == "") {
    teamEmail.innerHTML = "Email: <i>Email not available</i>";
  } else {
    teamEmail.innerHTML = "Email: <strong>" + teamData.email + "</strong>";
  }

  countryFlag.src = teamData.crestUrl;
  teamName.innerHTML = "Name: <strong>" + teamData.name + "</strong>";
  teamTla.innerHTML = "Tla: <strong>" + teamData.tla + "</strong>";
  teamAddress.innerHTML = "Address: <strong>" + teamData.address + "</strong>";
  teamPhone.innerHTML = "Phone: <strong>" + teamData.phone + "</strong>";
  teamWebsite.innerHTML = "Website: <strong>" + teamData.website + "</strong>";
  teamFounded.innerHTML = "Founded: <strong>" + teamData.founded + "</strong>";
  teamColors.innerHTML = "Club Colors: <strong>" + teamData.clubColors + "</strong>";
}

export default MODAL_TEAM_DETAIL;