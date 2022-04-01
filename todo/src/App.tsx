import { MouseEventHandler, useState } from 'react'
import { text } from 'stream/consumers'
import './App.css'
import { AddTodo } from './components/AddTodo'
import { PrintTodo } from './components/PrintTodo'
import { Todo } from './models/Todo'

export const App = () => {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo('Äta', false),
    new Todo('Sova', false),
  ])

  const toggleTodo = (todo: Todo) => {
    todo.done = !todo.done
    setTodos([...todos])
    if (todo.done === true) {
      for (let i = 0; i < todos.length; i++) {
        if (todo === todos[i]) {
          todos.splice(i, 1)
          setTodos([...todos])
        }
      }
    }
    console.log(todo)
  }

  let todosList = todos.map((todo: Todo, i) => {
    return <PrintTodo key={i}  todo={todo} toggle={toggleTodo} />
  })

  const saveNewTodo = (todo: Todo) => {
    setTodos([...todos, todo])
  }

  return (
    <>
      <AddTodo saveTodo={saveNewTodo} />
      {todosList}
    </>
  )
}

export default App
