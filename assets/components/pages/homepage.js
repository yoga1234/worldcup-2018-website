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
      </div>
    </div>
  `;
}

export default HOMEPAGE;