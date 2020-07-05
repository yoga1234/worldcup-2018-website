const NAVBAR = `
  <nav>
    <div class="container">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">KICKOFF</a>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><h5>☰</h5></a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="#">Home Page</a></li>
          <li><a href="#teamlist">Team List</a></li>
          <li><a href="#savedteam">Saved Team</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <ul class="sidenav" id="mobile-demo">
    <li><a href="#" class="sidenav-close">Home Page</a></li>
    <li><a href="#teamlist" class="sidenav-close">Team List</a></li>
    <li><a href="#savedteam" class="sidenav-close">Saved Team</a></li>
  </ul>
`;

export default NAVBAR;