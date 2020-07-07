const TEAMLIST = () => {
  window.location.hash = "teamlist";
  return `
    <div class="container">
      <h4 class="center-align">Team List</h4>
      <div class="row">
        <div class="col s12 m12 l6">
          <div class="card-panel valign-wrapper">
            <div class="col s4">
              <img src="./assets/images/180x180.png" alt="Country Flag" class="responsive-img">
            </div>
            <div class="col s8">
              <p>Name: France</p>
              <p>TLA: FRA</p>
              <a class="waves-effect waves-light btn">Detail</a>
            </div>
          </div>
        </div>
        <div class="col s12 m12 l6">
          <div class="card-panel valign-wrapper">
            <div class="col s4">
              <img src="./assets/images/180x180.png" alt="Country Flag" class="responsive-img">
            </div>
            <div class="col s8">
              <p>Name: France</p>
              <p>TLA: FRA</p>
              <a class="waves-effect waves-light btn">Detail</a>
            </div>
          </div>
        </div>
        <div class="col s12 m12 l6">
          <div class="card-panel valign-wrapper">
            <div class="col s4">
              <img src="./assets/images/180x180.png" alt="Country Flag" class="responsive-img">
            </div>
            <div class="col s8">
              <p>Name: France</p>
              <p>TLA: FRA</p>
              <a class="waves-effect waves-light btn">Detail</a>
            </div>
          </div>
        </div>
        <div class="col s12 m12 l6">
          <div class="card-panel valign-wrapper">
            <div class="col s4">
              <img src="./assets/images/180x180.png" alt="Country Flag" title="images not found" class="responsive-img">
            </div>
            <div class="col s8">
              <p>Name: France</p>
              <p>TLA: FRA</p>
              <a class="waves-effect waves-light btn">Detail</a>
            </div>
          </div>
        </div>
      </div>
    </div>
`;
}

export default TEAMLIST;