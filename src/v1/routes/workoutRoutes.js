const express = require("express")
const router = express.Router()
const workoutController = require("../../controllers/workoutController")
const multer = require('multer');
const upload = multer();

router.get("/",  workoutController.getAllWorkouts )

 router.get("/:workoutId",  workoutController.getOneWorkout)

 function validarCamposRequeridos(req, res, next) {
    const { name, mode, equipment, exercises, trainerTips } = req.body;
 
    if (!name || !mode || !equipment || !exercises || !trainerTips) {
      return res.status(400).json({ error: 'Faltan campos requeridos' });
    }
    next();
  }

 router.post("/", validarCamposRequeridos, workoutController.createNewWorkout)

 router.patch("/:workoutId", workoutController.updateOneWorkout)

 router.delete("/:workoutId", workoutController.deleteOneWorkout
    // res.send("Delete an existing workout")
 )

 module.exports = router