const  express = require('express')
const v1Router = require("./v1/routes/workoutRoutes")
const app = express() 
const PORT = process.env.PORT || 3000
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());


app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/workouts", v1Router)


app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`)
})