module.exports = router => {
    const games = require ('../controllers/games.controller.js');

    router.get("/games", games.findAll)
    router.post("/games", games.create);


}