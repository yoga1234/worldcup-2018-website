let dbPromised = idb.open("worldcup-team", 1, function(upgradeDb) {
  // creating object store
  let teamObjectStore = upgradeDb.createObjectStore("teams", {
    keyPath: "id"
  });
  let homepageObjectStore = upgradeDb.createObjectStore("homepage", {
    keyPath: "name",
  });
  teamObjectStore.createIndex("name", "name", { unique: false});
});

// saving homepage function
function saveHomepageData(data) {
  return new Promise(function(resolve, reject) {
    dbPromised
    .then(function(db) {
      let tx = db.transaction("homepage", "readwrite");
      let store = tx.objectStore("homepage");
      return store.add(data)
    })
    .then(function() {
      resolve("Homepage data disimpan");
    })
    .catch(function(err) {
      reject(err);
    })
  })
}

// get homepage data
function getIndexHomeData() {
  return new Promise(function(resolve, reject) {
    dbPromised
    .then(function(db) {
      let tx = db.transaction("homepage", "readonly");
      let store = tx.objectStore("homepage");
      return store.get("FIFA World Cup");
    })
    .then(function(response) {
      resolve(response);
    })
    .catch(function(err) {
      reject(err);
    });
  });
}

// saving savedteam function
function saveTeamData(data) {
  return new Promise(function(resolve, reject) {
    dbPromised
    .then(function(db) {
      let tx = db.transaction("teams", "readwrite");
      let store = tx.objectStore("teams");
      return store.add(data);
    })
    .then(function() {
      resolve("Team berhasil disimpan");
    })
    .catch(function(err) {
      reject(err);
    });
  })
};

// check for team data
function checkData(dataId) {
  return new Promise(function(resolve, reject) {
    dbPromised
    .then(function(db) {
      let tx = db.transaction("teams", "readonly");
      let store = tx.objectStore("teams");
      return store.get(dataId);
    })
    .then(function(data) {
      resolve(data)
    })
    .catch(function(err) {
      reject(err)
    })
  })
}

// get team data function
function getAllTeam() {
  return new Promise(function(resolve, reject) {
    dbPromised
    .then(function(db) {
      let tx = db.transaction("teams", "readonly");
      let store = tx.objectStore("teams");
      return store.getAll();
    })
    .then(function(teams) {
      resolve(teams);
    })
    .catch(function(err) {
      reject(err);
    });
  });
};

// delete team data function
function deleteTeam(idTeam) {
  return new Promise(function(resolve, reject) {
    dbPromised
    .then(function(db) {
      let tx = db.transaction("teams", "readwrite");
      let store = tx.objectStore("teams");
      return store.delete(idTeam);
    })
    .then(function() {
      resolve("Team deleted");
    })
    .catch(function(err) {
      reject("Something error: " + err);
    })
  })
}