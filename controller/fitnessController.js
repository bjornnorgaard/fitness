"use strict";

module.exports.index = function (req, res) {
    res.render('index', {title: "hello world"})
};

module.exports.getExercise = function (req, res) {
    res.render('exercise', {title: "hello world"})
};

module.exports.getWorkout = function (req, res) {
    res.render('workout', {title: "hello world"})
};

module.exports.postWorkout = function (req, res) {
    console.log(req.body.title);
    res.status(200).render('index');
}

module.exports.postExercise = function (req, res) {
    console.log(req.body.title);
    console.log(req.body.description);
    console.log(req.body.reps);
    console.log(req.body.sets);
    res.status(200).render('index');
}
