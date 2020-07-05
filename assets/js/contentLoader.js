import HOMEPAGE from '../components/pages/homepage.js';
import TEAMLIST from '../components/pages/teamlist.js';
import SAVEDTEAM from '../components/pages/savedteam.js';

const CONTENT_LOADER = (page) => {
  switch(page) {
    case "homepage":
      return HOMEPAGE();
    case "teamlist":
      return TEAMLIST();
    case "savedteam":
      return SAVEDTEAM();
  }
}

export default CONTENT_LOADER;