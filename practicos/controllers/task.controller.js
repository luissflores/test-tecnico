//MODELOS DE QUE SE USAN EN LAS CONSULTAS
const taskModel = require('../models/tasks.model');

//OBTIENE LAS TAREAS
const getTasks = async function (req, res) {
  try {
    let tasks = await taskModel.find()

    console.log('taresas  ------------------->', tasks)
    res.status(200).json({
      success: true,
      message: 'success',
      data: tasks
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      success: false,
      error: e.message,
    });
  }
};

//ACTUALIZA UNA TAREA
const updateTasks = async function (req, res) {
  try {
    let id = req.params.id;
    let {title, description, completed} = req.body;
    if (!id) {
      return res.status(500).json({
        success: false,
        message: 'el ID es requerido'
      })
    }

    if (!title || !description) {
      return res.status(500).json({
        success: false,
        message: 'faltan paramtros de consulta'
      })
    }

    let taskUpdated = await taskModel.findByIdAndUpdate(id, {description, completed, title}, {new: true})

    res.status(200).json({
      success: true,
      message: 'success',
      data: taskUpdated
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      success: false,
      error: e.message,
    });
  }
};

//ELIMINA UNA TAREA
const deleteTask = async function (req, res) {
  try {
    let id = req.params.id;
    if (!id) {
      return res.status(500).json({
        success: false,
        message: 'el ID es requerido'
      })
    }

    await taskModel.findByIdAndDelete(id)

    res.status(200).json({
      success: true,
      message: 'success',
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      success: false,
      error: e.message,
    });
  }
};

//ELIMINA UNA TAREA
const getOneTask = async function (req, res) {
  try {
    let id = req.params.id;
    if (!id) {
      return res.status(500).json({
        success: false,
        message: 'el ID es requerido'
      })
    }

    let task = await taskModel.findById(id)

    res.status(200).json({
      success: true,
      message: 'success',
      data: task
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      success: false,
      error: e.message,
    });
  }
};

//CREA UNA TAREA
const createTask = async function (req, res) {
  try {
    let {title, description, completed} = req.body;
    if (!title || !description) {
      return res.status(500).json({
        success: false,
        message: 'faltan paramtros de consulta'
      })
    }

    let newTask = new taskModel({
      title,
      description,
      completed,
    })

    newTask = await newTask.save()

    res.status(200).json({
      success: true,
      message: 'success',
      data: newTask
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      success: false,
      error: e.message,
    });
  }
};

//EXPORTA LAS FUNCIONES
module.exports = {
  createTask,
  getTasks,
  updateTasks,
  deleteTask,
  getOneTask,
};
