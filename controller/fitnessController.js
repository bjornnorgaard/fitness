var mongoose = require('mongoose');
mongoose.connect("mongodb://norgaard.io:27017/fitness");

var ExerciseSchema = {
    id: Number,
    workoutId: Number,
    title: String,
    description: String,
    reps: String,
    sets: String,
};

var WorkoutSchema = {
    id: Number,
    title: String,
    exercises: [ExerciseSchema]
};

var WorkoutModel = mongoose.model("Workout", WorkoutSchema);
var ExerciesModel = mongoose.model("Exercise", ExerciseSchema);

module.exports.index = function (req, res) {
    WorkoutModel.find(function(err, workouts) {
        if (err) {
            console.log("index: " + err);
        }

        ExerciesModel.find(function(err, exercises) {
            if (err) {
                console.log("index: " + err);
            }

            workouts.forEach(function(workout) {
                var id = workout.id;

                exercises.forEach(function(exercise) {
                    if (exercise.workoutId === id) {
                        workout.exercises.push(exercise);
                        console.log(exercise);
                    }
                }, this);

            }, this);

            res.render('index', {workouts});
        })
    });
};

module.exports.getExercise = function (req, res) {
    res.render('exercise', {title: "hello world"})
};

module.exports.getWorkout = function (req, res) {
    res.render('workout', {title: "hello world"})
};

module.exports.postWorkout = function (req, res) {
    var workout = new WorkoutModel({
        title: req.body.title,
        id: req.body.id,
    });

    workout.save(function(err) {
        if (err) {
            console.log("postWorkout: " + err);
        } else {
            console.log("postWorkout: successfully saved: " + workout);
        }
    });

    res.status(201).redirect('/');
}

module.exports.postExercise = function (req, res) {
    var exercise = new ExerciesModel({
        title: req.body.title,
        workoutId: req.body.workoutId,
        description: req.body.description,
        reps: req.body.reps,
        sets: req.body.sets
    });

    exercise.save(function(err) {
        if (err) {
            console.log("postExercise: " + err);
        } else {
            console.log("postExercise: successfully saved: " + exercise);
        }
    });

    res.status(201).redirect('/');
}
