"use strict";
var mongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');

module.exports.index = function (req, res) {
    // mongoClient.connect("mongodb://norgaard.io:27017/fitness", function(err, db) {
    // if (err) return console.dir(err);

    //     var collection = db.collection('workouts').find({}).toArray(function(err, res) {
    //         console.log("derp" + res[1]);
    //     });
    // });

    mongoose.connect("mongodb://norgaard.io:27017/fitness");

    var exerciseSchema = mongoose.Schema({
        id: Number,
        title: String,
        description: String,
        Reps: String,
        Sets: String,
    });

    var workoutSchema = mongoose.Schema({
        id: Number,
        title: String,
        exercises: [exerciseSchema]
    });

    res.render('index', {title: "hello world"})
};

module.exports.getExercise = function (req, res) {
    res.render('exercise', {title: "hello world"})
};

module.exports.getWorkout = function (req, res) {
    res.render('workout', {title: "hello world"})
};

module.exports.postWorkout = function (req, res) {
    mongoClient.connect("mongodb://norgaard.io:27017/fitness", function(err, db) {
        if (err) {
            return console.dir(err);
        }

        var collection = db.collection('workouts');
        var workout = { title: req.body.title }
        collection.insert(workout, { w: 1 }, function(err, res) {
            if (err) {
                console.log("Error: could not insert workout");
            }
            else {
                console.log("Success: workout inserted successfully");
            }
        });
    });

    res.status(201).render('index');
}

module.exports.postExercise = function (req, res) {
    var title = req.body.title;
    var description = req.body.description;
    var reps = req.body.reps;
    var sets = req.body.sets;
    res.status(201).redirect('/');
}
