let dbPromised = idb.open("worldcup-team", 1, function(upgradeDb) {
  // creating object store
  let teamObjectStore = upgradeDb.createObjectStore("teams", {
    keyPath: "ID",
    autoIncrement: true
  });
  teamObjectStore.createIndex("name", "name", { unique: false});
});

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
  })
}