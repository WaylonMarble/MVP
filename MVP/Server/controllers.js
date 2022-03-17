const models = require('./models.js');

const postLive = (req, res) => {
  console.log(req.body);
  models.addLive(req.body, function(err) {
    if (err) {
      res.status(500)
      res.send(err);
    } else {
      res.status(201)
      res.send('Session added');
    }
  })
};

const getLive = (req, res) => {
  models.getLive(function(err, records) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(records);
    }
  })
}

const getFridge = (req, res) => {
  models.getFridge(function(err, records) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(records);
    }
  })
}

const getFreezer = (req, res) => {
  models.getFreezer(function(err, records) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(records);
    }
  })
}

const postPump = (req, res) => {
  console.log(req.body);
  models.addPump(req.body, function(err) {
    if (err) {
      console.log(err)
      res.status(500)
      res.send(err);
    } else {
      res.status(201)
      res.send('Session added');
    }
  })
};

module.exports = { postLive, getLive, getFridge, getFreezer, postPump };