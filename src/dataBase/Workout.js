const { saveToDataBase, findAllWorkouts , deleteWokoutById, updateWorkoutById} = require("./utils")

const createNewWorkout = (req, res) => {
    saveToDataBase(req, res)
}

const getAllWorkouts = (req, res) => {
    const allWorkouts = findAllWorkouts()

    return allWorkouts
}

const updateOneWorkout = (req) => {
    const {workoutId} = req.params
    const {body} = req 
    const updatedWorkout = updateWorkoutById(workoutId, body)

    return updatedWorkout
}

const deleteOneWorkout =(req, res) => {
    const {workoutId} = req.params
    const deletedWorkout = deleteWokoutById(workoutId)
    return deletedWorkout
}

module.exports = {
    createNewWorkout,
    getAllWorkouts,
    deleteOneWorkout,
    updateOneWorkout
}