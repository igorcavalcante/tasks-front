import React from 'react'
import { connect } from 'react-redux'
import { addTaskApi } from '../actions'

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
      <form onSubmit={e => { e.preventDefault(); dispatch(addTaskApi(state))}}>
        <label>Name: </label><input name="name" onBlur={handleInputChange}/><br/>
        <label>Name: </label><input name="time" onBlur={handleInputChange}/><br/>
        <label>Date: </label><input name="date" onBlur={handleInputChange}/><br/>
        <label>Project: </label><input name="project" value="MVP" onBlur={handleInputChange}/><br/>
        <button type="submit"> Add Task </button>
      </form>
    </div>
  )
}
const AddTaskContainer = connect()(AddTask)

export default AddTaskContainer
