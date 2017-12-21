import React from 'react'
import { connect } from 'react-redux'
import { addTask } from '../actions'

let AddTask = ({ dispatch }) => {

  let state = {}

  let handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    console.log(name, value)

    state[name] = value
  }

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        dispatch(addTask(state))
      }}>
        <input name="name" onBlur={handleInputChange}/>
        <input name="date" onBlur={handleInputChange}/>
        <input name="project" onBlur={handleInputChange}/>
        <button type="submit"> Add Task </button>
      </form>
    </div>
  )
}
const AddTaskContainer = connect()(AddTask)

export default AddTaskContainer
