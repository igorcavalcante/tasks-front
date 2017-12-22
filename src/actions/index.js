import _ from "lodash/fp"

const backUrl = "https://tasks-back.firebaseio.com/task.json"


export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const removeTask = (id) => {
  console.log("chamando inteface http para remover task com id", id)  
  return ({
    type: "REMOVE_TASK",
    id
  })
}

export const addTask = (task) => {
    return ({
      type: "ADD_TASK",
      task
    })
}

export const loadTasks = (tasks) => ({ type: "LOAD_TASKS", tasks })

export const addTaskApi = (task) => (dispatch) => {
  fetch(backUrl, {
    method: "POST",
    body: JSON.stringify(task)
  }).then((res) => {
    dispatch(addTask(task))
  }).catch((error) => {
    console.error(`Erro ao cadastrar task, ${error}`)
    throw(error)
  })
}

export const loadTasksApi = () => (dispatch) => {
  fetch(backUrl, {
    method: "GET",
  })
  .then((res) => res.json())
  .then((body) => {
    let tasks = _.keys(body).map((key) => {
      return ({
        id: key,
        name: body[key].name,
        project: body[key].project,
        time: body[key].time,
        date: body[key].date,
      })
    })
    dispatch(loadTasks(tasks))
  })
}
