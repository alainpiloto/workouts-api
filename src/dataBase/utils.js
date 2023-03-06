const { PrismaClient } = require('@prisma/client');


const prisma = new PrismaClient();
const saveToDataBase = async (req, res) => {
    const { name, mode, equipment, exercises, trainerTips } = req.body;

    const newFormData = {
        name, mode, equipment, exercises, trainerTips 
    }

    try {
        const createdFormData = await prisma.Workout.create({
          data: newFormData,
        });
        // res.json(createdFormData);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating form data.' });
      }
}

const findAllWorkouts = async () => {
  try {
    
    const workouts = await prisma.Workout.findMany()
    return workouts
  } catch (error) {
    console.log(error)
  }
}

const deleteWokoutById = async (workoutId) => {
  try {
    const deletedWorkout = await prisma.Workout.delete({
      where: {
        id: workoutId,
      },
    
    })
      return deletedWorkout
   
    
  } catch (error) {
    console.log(error.meta.cause)
  }
}

const updateWorkoutById = async (workoutId, body) => {
  try {
    const updatedWorkout = await prisma.Workout.update({
      where: {
        id: workoutId,
      },
      data: {
        ...body
      },
    })
    console.log({updatedWorkout})
    return updatedWorkout
  } catch (error) {
    
  }
} 



module.exports = { saveToDataBase , findAllWorkouts, updateWorkoutById, deleteWokoutById};