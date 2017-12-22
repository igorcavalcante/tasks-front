let taskId = 0

const tasks = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      action.task.id = taskId++
      return [ ...state, action.task]
    case 'REMOVE_TASK':
      return state.filter (task => task.id != action.id)
    case 'LOAD_TASKS':
      return action.tasks
    default:
      return state
  }
}

export default tasks
