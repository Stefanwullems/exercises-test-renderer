import React, { useState } from 'react'
import { create, act } from 'react-test-renderer'

const Status = (props) => {
  const [status, setStatus] = useState(false)

  return (
    <div>
      <button onClick={() => setStatus(!status)} />
      <span>{status ? 'available' : 'occupied'}</span>
    </div>
  )
}

// Make the tests pass by using teh 

test('The status toggles when I click the button', () => {
  const { root } = create(<Status />)

  let button
  let status
  /* code here */

  /**
   * root.find(...):
   *  loops over every node in the component.
   *  If root returns true once troughout the loop, 
   *  it returns the element that matched the condition.
   *  If it returns true zero or multiple times it throws an error
   */

  // find button
  button = root.find((element) => {

    return element.type === 'button'
  })

  act(() => {
    // trigger onClick
    button.props.onClick()
  })

  // find status
  status = root.find((element) => {

    return element.type === 'span'
  })

  /* end */

  expect(status.children[0]).toBe('available')
})
