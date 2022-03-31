import { useState } from 'react'
import { Todo } from '../models/Todo'
import { AddTodo } from './AddTodo'
import { PrintTodo } from './PrintTodo'

export const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo('Städa'),
    new Todo('Träna'),
  ])
    
    const toggle = (todoToToggle: Todo) => {
        todoToToggle.done = !todoToToggle.done
        setTodos([...todos])
    }

    const addTodo = (newTodo: Todo) => {
        setTodos([...todos, newTodo])
    }

  let printList = todos.map((todo: Todo, i) => {
      return <PrintTodo key={i} todo={todo} toggleTodo={toggle }></PrintTodo>
  })

    return <>
        <AddTodo saveTodo={addTodo}/>
        {printList}</>
}
