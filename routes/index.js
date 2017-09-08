const express = require('express');
const router = express.Router();
const controller = require('../controller/fitnessController');

router.get('/', controller.index);
router.get('/workout', controller.getWorkout);
router.get('/exercise', controller.getExercise);

router.post('/workout', controller.postWorkout);
router.post('/exercise', controller.postExercise);

module.exports = router;
