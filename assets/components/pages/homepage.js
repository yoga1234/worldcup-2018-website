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
            <div class="divider"></div>
            <div class="col s6">
              <em>Start date: 09-09-1995</em>
              <div class="divider"></div>
            </div>
            <div class="col s6">
              <em>End date: 09-09-1995</em>
              <div class="divider"></div>
            </div>
          </div>
        </div>
        <div>
          <h4 class="center-align">Team List</h4>
        </div>
      </div>
    </div>
  `;
}

export default HOMEPAGE;