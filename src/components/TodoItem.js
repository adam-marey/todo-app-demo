import React from 'react'
import styles from './TodoItem.module.css'
import { BsFillTrashFill } from 'react-icons/bs'
import { AiOutlineCheckCircle } from 'react-icons/ai'
const TodoItem = (props) => {
  const {todo, removeTodo, completeTodo} = props
  return (
    <div className={todo.completed ? "todo-row completed" : "todo-row"}>
      {
        todo.text
      }
      <div className={styles.iconsContainer}>
      <BsFillTrashFill className={styles.icone} style={{marginRight: 5}}onClick={() => removeTodo(todo.id)}/>
      <AiOutlineCheckCircle className={styles.icone} style={{marginRight: 5}} onClick={() => completeTodo(todo.id)}/>
      </div>
    </div>
  )
}

export default TodoItem
