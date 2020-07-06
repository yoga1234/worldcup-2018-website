const HOMEPAGE = () => {
  window.location.hash = "homepage";
  return `
    <div class="container">
      <div class="row">
        <div class="col s12">
          <div class="card-panel center-align blue lighten-2">
            <img src="./assets/images/180x180.png" alt="Yogasmara Brand Logo">
            <h3 class="light white-text">FIFA World Cup 2018</h3>
            <h5 class="thin white-text">Find your favourite team of world cup 2018 here.</h5>
          </div>
        </div>
        <div>
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
      </div>
    </div>
  `;
}

export default HOMEPAGE;