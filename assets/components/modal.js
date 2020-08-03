const MODAL = `
<div id="team-modal" class="modal modal-fixed-footer">
  <div class="modal-content">
    <div class="card-panel teal">
      <h4 class="white-text light center">Team Detail</h4>
      <hr>
      <div class="center">
        <img class="modal-flag-image" src="./assets/images/not-found.svg" alt="Country Flag">
      </div> <!-- center -->
      <div class="center">
        <div class="card-panel">
          <h5 class="light">Name: -</h5>
        </div>
        <div class="card-panel">
          <h5 class="light">Tla: -</h5>
        </div>
        <div class="card-panel">
          <h5 class="light">Adress: -</h5>
        </div>
        <div class="card-panel">
          <h5 class="light">Phone: -</h5>
        </div>
        <div class="card-panel">
          <h5 class="light">Website: -</h5>
        </div>
        <div class="card-panel">
          <h5 class="light">Email: -</h5>
        </div>
        <div class="card-panel">
          <h5 class="light">Founded: -</h5>
        </div>
        <div class="card-panel">
          <h5 class="light">Club Colors: -</h5>
        </div> <!-- card-panel -->
      </div> <!-- center -->
    </div> <!-- card-panel teal-->
  </div> <!-- modal-content -->
  <div class="modal-footer">
    <a class="waves-effect waves-light btn indigo accent-4">Save Team</a>
    <a class="waves-effect waves-light btn red modal-close">Close</a>
  </div> <!-- modal-footer -->
  </div> <!-- modal modal-fixed-footer -->
`;

export default MODAL;