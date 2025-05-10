const express = require('express');
const {validationMiddleware} = require('../middleware');
const router = express.Router();

let tasksController = require('../controllers/task.controller');

// OBTIENE TODAS LAS TAREAS
router.get('/getTasks', validationMiddleware, tasksController.getTasks);

// OBTIENE UNA TAREA
router.get('/getOneTask', validationMiddleware, tasksController.getOneTask);

// ACTUALIZA UNA TAREA
router.put('/updateTask', validationMiddleware, tasksController.updateTasks);

// ELIMINA UNA TAREA
router.delete('/deleteTask', validationMiddleware, tasksController.deleteTask);

// CREA UNA TAREA
router.post('/createTask', validationMiddleware, tasksController.createTask);

module.exports = router;
