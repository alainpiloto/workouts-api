const Workout = require("../dataBase/Workout")

const getAllWorkouts = () => {
  const allWorkouts = Workout.getAllWorkouts()
    return allWorkouts
  };
  
  const getOneWorkout = () => {
    return;
  };
  
  const createNewWorkout = (req, res) => {
    return Workout.createNewWorkout(req, res)
    
  }
  
  const updateOneWorkout = (req) => {
    return Workout.updateOneWorkout(req)
  };
  
  const deleteOneWorkout = (req, res) => {
    return Workout.deleteOneWorkout(req)
   
  };
  
  module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
  };