const sql = require ('../config.js');

class Games {

    getAll = (result) => {
        sql.query('SELECT * FROM games', (err, res) => {
            if (err) {
                result(err, null);
            }
            result(null, res);
        });
    };

    create = (newGame, result) => {
        delete newGame['table'] //Removing 'title' property from object.
        sql.query(`INSERT INTO games SET ?`, newGame, (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
          }
          result(null, {...newGame });
        });
      };
}

module.exports = Games;