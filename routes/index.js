const express = require('express');
const router = express.Router();
const controller = require('../controller/fitnessController');

router.get('/', controller.index);
router.get('/workout', controller.createWorkout);
router.get('/exercise', controller.createExercise);

router.post('/addworkout', controller.postWorkout);
router.post('/addexercise', controller.postExercise);

module.exports = router;
