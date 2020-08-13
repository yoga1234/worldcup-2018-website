// getting homepage content
const DATA_FETCH_API = (url) => {
  return fetch(url, {
    method:'GET',
    headers: {
      'X-Auth-Token': '1ae092755d4f43979fb5546e09080bd6'
    }
  }).then((response) => {
    return response.json();
  }).then((data) => {
    return JSON.stringify(data);
  }).catch((error) => {
    return error;
  })
}

export default DATA_FETCH_API;