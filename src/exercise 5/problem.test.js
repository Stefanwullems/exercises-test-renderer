import React from 'react'
import { create, act } from 'react-test-renderer'

class MyComponent extends React.Component {
  constructor (props) {
    super(props)
    this.input = null
  }

  render () {
    return (
      <input
        type="text"
        // sets this.input to be this element
        ref={el => this.input = el} />
    )
  }
}

// Mock the input node so that you can check if focus gets called

test('input.focus is accessible from the class component', () => {

  // jest.fn(...) returns a mock function that keeps track of 
  // how many times its called and with which parameters
  const focus = jest.fn()

  /* code here */

  /**
   * createNodeMock:
   * loops over all elements and returns a mock element in its place
   */
  const createNodeMock = (element) => null

  /**
   * getInstance returns the 'this' value of class components
   */
  const { getInstance } = create(<MyComponent />, { createNodeMock })

  act(() => {
    // call the mock function

  })
  /* end */

  expect(focus).toBeCalledTimes(1)
})
