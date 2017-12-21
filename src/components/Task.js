import React from 'react'
import PropTypes from 'prop-types'

class Task extends React.Component {
  constructor(props) {
    super(props)
    this.state = props

    console.log(`props: ${JSON.stringify(props)}`)
    console.log(`state: ${JSON.stringify(this.state)}`)


    // this.handleSubmit = this.handleSubmit.bind(this);   
  }
  render() {
    return (
    <li>
      text {this.state.name}, {this.state.date}, {this.state.project}
    </li>
    )
  }

}


/* Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
} */

export default Task
