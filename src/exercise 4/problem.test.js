import React, { useState } from 'react'
import { create, act } from 'react-test-renderer'

const Todo = (props) => {
  const [done, setDone] = useState(false)

  const onChangeDone = (e) => setDone(e.target.checked)

  return (
    <li>
      <input type='checkbox' checked={done} onChange={onChangeDone} />
      {props.todo}
    </li>
  )
}

const TodoList = (props) => {
  const [todoInput, setTodoInput] = useState('')

  const onTodoInputChange = (e) => setTodoInput(e.target.value)

  const [todos, setTodos] = useState([
    'water plants',
    'clean up the house'
  ])

  const addTodo = (todo) => setTodos([...todos, todo])

  const onSubmitTodo = () => {
    addTodo(todoInput)
    setTodoInput('')
  }

  return (
    <div>
      <input type='text' onChange={onTodoInputChange} value={todoInput} />
      <button onClick={onSubmitTodo} />
      <ul>
        {todos.map((todo, i) => <Todo todo={todo} key={i} />)}
      </ul>
    </div>
  )
}

// Use findAll to see if a todo is added when you click the add todo button

test('A todo gets rendered when I press the button', () => {
  const { root } = create(<TodoList />)

  let input
  let button
  let todos
  /* code here */

  // find status and button
  input = root.find((element) => {

    return false
  })

  button = root.find((element) => {

    return false
  })

  act(() => {
    // trigger onChange for the text input with a mockevent


    // trigger onClick for the button

  })

  /**
   * root.findAll(...):
   *  loops over every node in the component.
   *  it returns all the elements for which true is returned
   */

  // find all todos
  todos = root.findAll((element) => {

    return false
  })


  /* end */

  expect(todos.length).toBe(3)
})
