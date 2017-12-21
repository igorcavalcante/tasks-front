import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TaskList from '../components/TaskList'

const mapStateToProps = (state) => ({
  tasks: state.tasks
})

const mapDispatchToProps = {
  //onTodoClick: toggleTodo
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList)