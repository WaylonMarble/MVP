const db = require('../DB')

// Add a live session
const addLive = (params, cb) => {
  const queryArgs = [params.name, params.time, params.side, params.duration];
  db.query('INSERT INTO live(baby_name, time_fed, side, duration) values($1, $2, $3, $4)', queryArgs, (err) => {
    if (err) {
      cb(err);
    } else {
      cb(null);
    }
  })
};

const getLive = (cb) => {
  db.query('SELECT * FROM live', (err, records) => {
    if (err) {
      cb(err);
    } else {
      cb(null, records.rows);
    }
  })
}

const getFridge = (cb) => {
  const queryArgs = ['Fridge'];
  db.query('SELECT side, time_pumped, duration, amount, units FROM pump WHERE storage = $1', queryArgs, (err, records) => {
    if (err) {
      console.log(err)
      cb(err);
    } else {
      cb(null, records.rows);
    }
  })
}

const getFreezer = (cb) => {
  const queryArgs = ['Freezer'];
  db.query('SELECT side, time_pumped, duration, amount, units FROM pump WHERE storage = $1', queryArgs, (err, records) => {
    if (err) {
      console.log(err)
      cb(err);
    } else {
      cb(null, records.rows);
    }
  })
}

const addPump = (params, cb) => {
  const queryArgs = [params.side, params.time, params.duration, params.amount, params.units, params.storage];
  db.query('INSERT INTO pump(side, time_pumped, duration, amount, units, storage) values($1, $2, $3, $4, $5, $6)', queryArgs, (err) => {
    if (err) {
      cb(err);
    } else {
      cb(null);
    }
  })
};

module.exports = { addLive, getLive, getFridge, getFreezer, addPump }