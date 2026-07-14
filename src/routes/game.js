const express=require("express");
const router=express.Router();

const{
createGame,
getGames,
deleteGame
}=require("../controllers/gameController");

router.post("/",createGame);
router.get("/",getGames);
router.delete("/:id",deleteGame);

module.exports=router;