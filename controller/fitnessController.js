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
    res.status(201).render('index');
}

module.exports.postExercise = function (req, res) {
    var title = req.body.title;
    var description = req.body.description;
    var reps = req.body.reps;
    var sets = req.body.sets;
    res.status(201).redirect('/');
}
