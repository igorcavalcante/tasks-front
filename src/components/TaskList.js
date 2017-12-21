import React from 'react'
import PropTypes from 'prop-types'
import Task from './Task'

const TaskList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map(task => <Task key={task.id} {...task} />)}
    </ul>
  )}

/* TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
} */

export default TaskList
