const workoutService = require("../services/workoutService")

const getAllWorkouts = async(req, res) => {
    const allWorkouts = await workoutService.getAllWorkouts()
    res.send({status : "ok" , data : allWorkouts})
}

const getOneWorkout = (req, res) => {
    const workout = workoutService.getOneWorkout();
    res.send("get an existing workout")
}

const createNewWorkout = (req, res) => {
    const createdWorkout = workoutService.createNewWorkout(req, res);
    res.send(createdWorkout);
}
const updateOneWorkout = async (req, res) => {
    const updatedWorkout = await workoutService.updateOneWorkout(req);
    res.send({status : "OK", message : "Workout has been updated",  data: updatedWorkout})
}

const deleteOneWorkout = async (req, res) => {
    const deletedWorkout = await workoutService.deleteOneWorkout(req);

    res.send({status : "OK", message : "Workout has been deleted",  data: deletedWorkout})
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}