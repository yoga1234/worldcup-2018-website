import HOMEPAGE from '../components/pages/homepage.js';
import TEAMLIST from '../components/pages/teamlist.js';
import SAVEDTEAM from '../components/pages/savedTeam.js';

const CONTENT_LOADER = (page, data) => {
  switch(page) {
    case "homepage":
      return HOMEPAGE(data);
    case "teamlist":
      return TEAMLIST();
    case "savedteam":
      return SAVEDTEAM();
  }
}

export default CONTENT_LOADER;