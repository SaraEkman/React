// import { v4 as uuid } from 'uuid'

export class Todo {
  //   id = uuid()
  id = Math.floor(Math.random() * 100)
  constructor(public text: string, public done: boolean) {}
}
