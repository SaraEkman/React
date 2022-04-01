import { ChangeEvent, useState } from 'react'
import { Todo } from '../models/Todo'
interface IAddTodoProps {
  saveTodo(todo: Todo): void
}

export const AddTodo = (props: IAddTodoProps) => {
  const [newTodo, setNewTodo] = useState<Todo>(new Todo('', false))

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(new Todo(e.target.value, false))
  }
  const handleClick = () => {
    props.saveTodo(newTodo)
    setNewTodo(new Todo('', false))
  }
  return (
    <>
      <input type="text" onChange={handleChange} />
      <button type="button" onClick={handleClick}>
        Sprar
      </button>
    </>
  )
}
