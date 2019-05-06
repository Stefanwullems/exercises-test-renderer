import React, { useState } from 'react'
import { create, act } from 'react-test-renderer'

const Button = (props) => {
  const [count, setCount] = useState(0)

  return <button onClick={() => setCount(count + 1)}>{count}</button>
}

// Make the tests pass by only using toJson and accessing props

test('The counter updates when I click the button', () => {
  const { toJSON } = create(<Button key={1} />)
  let button
  /* code here */

  // initialize button
  button = undefined

  act(() => {
    // trigger onClick

  })

  // re-render
  button = undefined

  /* end */

  expect(button.children[0]).toBe('1')
  expect(button).toMatchSnapshot()
})
