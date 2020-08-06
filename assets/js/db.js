let dbPromised = idb.open("worldcup-team", 1, function(upgradeDb) {
  // creating object store
  let teamObjectStore = upgradeDb.createObjectStore("teams", {
    keyPath: "id"
  });
  teamObjectStore.createIndex("name", "name", { unique: false});
});

// saving function
function saveTeamData(data) {
  dbPromised
  .then(function(db) {
    let tx = db.transaction("teams", "readwrite");
    let store = tx.objectStore("teams");
    console.log(data);
    store.add(data);
    return tx.complete;
  })
  .then(function() {
    console.log("Team berhasil disimpan");
  })
  .catch(function(err) {
    console.log(err);
  });
};

// get data function
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
      console.log(err);
    });
  });
};

// delete data function
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