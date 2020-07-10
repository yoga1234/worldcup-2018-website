// getting homepage content
const HOMEPAGE_DATA = () => {
  const HOME_URL = 'https://api.football-data.org/v2/competitions/2000';

  return fetch(HOME_URL, {
    method: 'GET',
    headers: {
      'X-Auth-Token': '1ae092755d4f43979fb5546e09080bd6'
    }
  }).then((res) => {
    return res.json()
  }).then((data) => {
    console.log("data: " + JSON.stringify(data));
    return JSON.stringify(data);
  }).catch((err) => {
    return err;
  })
};

// getting team list
const TEAMPAGE_DATA = () => {

};

// getting single team data
const SINGLETEAM_DATA = () => {

};

export default HOMEPAGE_DATA;