import { ChangeEvent, useState } from "react"
import { Todo } from "../models/Todo"

interface IAddTodoProps {
    saveTodo(newTodo: Todo):void
}

export const AddTodo = (props: IAddTodoProps) => {
    const [TodoText, setTodoText] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTodoText(e.target.value)
    }

    const handleClick = () => {
        let todo = new Todo(TodoText)
        props.saveTodo(todo)
        setTodoText('')
    }

  return (
    <>
      <div>
        <input type="text" onChange={handleChange} value={TodoText}/>
        <button type="button" onClick={handleClick}>Spara</button>
      </div>
    </>
  )
}
