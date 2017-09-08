"use strict";

module.exports.index = function (req, res) {
    res.render('index', {title: "hello world"})
};

module.exports.createExercise = function (req, res) {
    res.render('exercise', {title: "hello world"})
};

module.exports.createWorkout = function (req, res) {
    res.render('workout', {title: "hello world"})
};

module.exports.postWorkout = function (req, res) {
    console.log(req.body.title);
    res.status(200).send("OK");
}

module.exports.postExercise = function (req, res) {
    console.log(req);
}
