import NAVBAR from '../components/navbar.js';
import FOOTER from '../components/footer.js';

import CONTENT_LOADER from './contentLoader.js';

let mainTag = document.getElementsByTagName('main')[0];

document.addEventListener('DOMContentLoaded', function() {
  document.body.insertAdjacentHTML("afterbegin", NAVBAR);
  document.body.insertAdjacentHTML("beforeend", FOOTER);

  mainTag.innerHTML = CONTENT_LOADER("homepage");

  // initialization parallax
  const parallaxElems = document.querySelectorAll('.parallax');
  const instances = M.Parallax.init(parallaxElems, {})

  // initialization navbar
  const navbarElems = document.querySelectorAll('.sidenav');
  const navbarInstances = M.Sidenav.init(navbarElems, {})
});

window.addEventListener('hashchange', function() {
  if(location.hash === "#teamlist") {
    mainTag.innerHTML =  CONTENT_LOADER("teamlist")
  } else if(location.hash === "#savedteam") {
    mainTag.innerHTML = CONTENT_LOADER("savedteam")
  } else {
    mainTag.innerHTML =  CONTENT_LOADER("homepage")
  }
}, false)
