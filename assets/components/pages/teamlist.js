const TEAMLIST = (data) => {
  console.log(data);
  let eventData = '';
  if(data = "empty") {
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
    eventData = `
      <h1>Data has been loaded</h1>
    `;
  }
  window.location.hash = "teamlist";
  return `
    <div class="container">
      <h4 class="center-align">Team List</h4>
      <div class="center">
      <div class="row margin-top-50">
        ${eventData}
      </div>
    </div>
`;
}

export default TEAMLIST;