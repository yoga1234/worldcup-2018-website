const TEAMLIST = (data) => {
  let eventData = '';
  if(data == "empty") {
    eventData = `
      <div class="preloader-wrapper big active">
        <div class="spinner-layer spinner-blue-only">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div><div class="gap-patch">
            <div class="circle"></div>
          </div><div class="circle-clipper right">
            <div class="circle"></div>
          </div>
        </div>
      </div>
    `;
  } else {
    for(let i = 0; i < data.teams.length; i++) {
      let teamImage = '';
      if(data.teams[i].crestUrl == null || data.teams[i].crestUrl == "") {
        teamImage = './assets/images/not-found.svg';
      } else {
        teamImage = data.teams[i].crestUrl;
      }
      eventData += `
      <div class="col s12 m12 l6">
        <div class="card-panel valign-wrapper">
          <div class="col s4">
            <img src="${teamImage}" alt="${data.teams[i].name} Flag" class="responsive-img">
          </div>
          <div class="col s8">
            <p>Name: ${data.teams[i].name}</p>
            <p>TLA: ${data.teams[i].tla}</p>
            <a data-team-name="${data.teams[i].name}" class="waves-effect waves-light btn modal-trigger light-blue accent-4 detail-team" href="#team-modal">Detail</a>
          </div>
        </div>
      </div>
      `;
    };    
  };
  window.location.hash = "teamlist";
  return `
    <div class="container">
      <h4 class="center-align">Team List</h4>
      <div class="center">
      <div class="row margin-top-50">
        ${eventData}
      </div>
    </div>

    <!-- modal -->
    <div id="modal1" class="modal modal-fixed-footer">
      <div class="modal-content">
        <h4>Modal Header</h4>
        <p>A bunch of text</p>
      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-close waves-green btn-flat">Agree</a>
      </div>
    </div>
`;
}

export default TEAMLIST;