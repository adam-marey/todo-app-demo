import react, {useState} from 'react'
import './App.css';
import styles from './App.module.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (text) => {
    // change the first to do, and when we add more todo, we will push it to the beginng of the array
    let id = 1
    if (todos.length > 0) {
      id = todos[0].id + 1
    }
    let todo = {id: id, text: text, completed: false}
    // we add the new todo, plus the old todos ...
    let newTodo = [todo, ...todos]
    console.log(newTodo)
    setTodos([todo, ...todos])
  }
  const removeTodo = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id)
    setTodos(updatedTodos)
  }
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id ) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
  }
  return (
    <div className={styles.todoApp}>
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => {
        return (
          <TodoItem removeTodo={removeTodo} completeTodo={completeTodo} todo={todo} key={todo.id}/>
        )
      })}
    </div>
  );
}

export default App;
