const HOMEPAGE = (data) => {
  let eventData = ''
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
  } if(data === "database") {
    eventData = `<h5 class="margin-top-50 center-align light">Oops, Someting is wrong :(</h5>`;
  } else {
    eventData = `
      <div class="col s12 m12 l4">
        <div class="card-panel">
          <h5>Name: </h5>
          <p>${data.name}</p>
        </div>
      </div>
      <div class="col s12 m12 l4">
        <div class="card-panel">
          <h5>Code: </h5>
          <p>${data.code}</p>
        </div>
      </div>
      <div class="col s12 m12 l4">
        <div class="card-panel">
          <h5>Stage: </h5>
          <p>${data.stage}</p>
        </div>
      </div>
      <div class="col s12 m12 l6">
        <div class="card-panel">
          <h5>Start Date: </h5>
          <p>${data.start}</p>
        </div>
      </div>
      <div class="col s12 m12 l6">
        <div class="card-panel">
          <h5>End Date: </h5>
          <p>${data.end}</p>
        </div>
      </div>
    `;
  }
  window.location.hash = "homepage";
  return `
    <div class="container">
      <div class="row margin-top-50">
        <div class="col s12">
          <div class="card-panel center-align blue lighten-2">
            <img src="./assets/images/180x180.png" alt="Yogasmara Brand Logo">
            <h3 class="light white-text">FIFA World Cup 2018</h3>
            <h5 class="thin white-text">Find your favourite team of world cup 2018 here.</h5>
          </div>
        </div>
        <div class="center">
          <h3 class="thin">EVENT DETAIL:</h3>
          ${eventData}
        </div>
      </div>
      <div class="row">
        <div class="center margin-top-50">
          <h4 class="thin">This website offers:</h4>
        </div>
        <div class="col s12 m4 l4">
          <div class="row card-panel zero-margin">
            <div class="col s4 m12 l12">
              <img src="./assets/images/soccer.svg" alt="Soccer Jersey" class="responsive-img">
              <!-- Icons made by Freepik from Flaticon-->
            </div>
            <div class="col s8 m12 l12">
              <h5 class="center">Teams</h5>
              <p class="center">World Cup 2018 teams is here, find your favourite now!</p>
            </div>
          </div>
        </div>
        <div class="col s12 m4 l4">
          <div class="row card-panel zero-margin">
            <div class="col s4 m12 l12">
              <img src="./assets/images/save.svg" alt="Saving Disk" class="responsive-img">
              <!-- Icons made by Freepik from Flaticon -->
            </div>
            <div class="col s8 m12 l12">
              <h5 class="center">Save</h5>
              <p class="center">Save your favourite team data and read later anytime!</p>
            </div>
          </div>
        </div>
        <div class="col s12 m4 l4">
          <div class="row card-panel zero-margin">
            <div class="col s4 m12 l12">
              <img src="./assets/images/tablet.svg" alt="Tablet Computer" class="responsive-img">
              <!-- Icons made by Srip from Flaticon -->
            </div>
            <div class="col s8 m12 l12">
              <h5 class="center">Responsive</h5>
              <p class="center">Our responsive design allow you to open on any devices!</p>
            </div>
          </div>
        </div> 
      </div>
    </div>
  `;
}

export default HOMEPAGE;