const TEAMLIST = (data) => {
  let eventData = '';
  if(data === "empty") {
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
    for(let i = 0; i < data.length; i++) {
      let teamImage = '';
      if(data[i].crestUrl === null || data[i].crestUrl === "") {
        teamImage = './assets/images/not-found.svg';
      } else {
        teamImage = data[i].crestUrl;
      }
      eventData += `
      <div class="col s12 m12 l6">
        <div class="card-panel valign-wrapper">
          <div class="col s4">
            <img src="${teamImage}" alt="${data[i].name} Flag" class="responsive-img">
          </div>
          <div class="col s8">
            <p>Name: ${data[i].name}</p>
            <p>TLA: ${data[i].tla}</p>
            <a data-team-name="${data[i].name}|${data[i].id}" class="waves-effect waves-light btn modal-trigger light-blue accent-4 detail-team" href="#team-modal">Detail</a>
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
    </div>
`;
}

export default TEAMLIST;