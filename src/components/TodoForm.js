import React, {useState} from 'react'
import styles from './TodoForm.module.css'

const TodoForm = (props) => {
  // input is a dinamce variable. and set input is a dunction that would update that variable
  const [input, setInput] = useState('')
  // add an on change function to update the state when we have an input

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addTodo(input)
    setInput("")
  }
  return (
      <form onSubmit={handleSubmit}className={styles.todoForm}>
      <input 
      value={input}
      onChange={(e) => setInput(e.target.value)}
      className={styles.todoInput}
       placeholder="Add a todo" />
      <button type="submit" className={styles.todoButton}> Add to DO</button>
      </form>
  )
}

export default TodoForm
