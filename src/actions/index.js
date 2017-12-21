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
  console.log("chamando inteface http para add task com id", task.id)  
  return ({
    type: "ADD_TASK",
    task
  })
}
