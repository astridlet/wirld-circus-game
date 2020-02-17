const Games = require ('../models/games.model.js');

exports.findAll = (req, res) => {
    const Game = new Games();
    Game.getAll((err, data) => {
        if (err) {
            res.status(500).send("Error occured")
        } else {
            res.send(data)
        }
    })
};

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
    }
    const Game = new Games({...req.body});
    const reqBody = { ...req.body}
    for (let property in reqBody) {
      Game[property] = reqBody[property]
    }
    console.log("My Game", Game)
    Game.create(Game, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Client."
        });
      else res.send(data);
    });
  };