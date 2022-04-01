// import React from 'react'
// import styled from 'styled-components'
import { Todo } from '../models/Todo'

interface ITodoProps {
  todo: Todo
  toggle(todo: Todo): void
}

// const DoneTodo = styled.div`
//   text-decoration: line-through;
// `
// const NotDoneTodo = styled.div``

export const PrintTodo = (props: ITodoProps) => {
  const handleClick = () => {
    props.toggle(props.todo)
  }
  
  return (
    <>
      {/* {props.todo.done ? (
        <DoneTodo onClick={handleClick}>{props.todo.text}</DoneTodo>
      ) : (
        <NotDoneTodo onClick={handleClick}>{props.todo.text}</NotDoneTodo>
      )} */}
      <div onClick={handleClick}>{props.todo.text}</div>
    </>
  )
}
