// lib/ is for code that the frontend and backend should both have access to. It
// might be large classes, or just types.
//
// It can be imported from backend/* or src/* files like this:
//
// import { Todo } from 'lib'
//

export type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}
