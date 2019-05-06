import React from 'react'
import { create } from 'react-test-renderer'


const Component = (props) => {
  return <div>Hello</div>
}

// Find a method on testRenderer that you can use to make the test pass
// reference of all methods https://reactjs.org/docs/test-renderer.html

test('the component hasn\'t changed', () => {
  const {/* code here */            /* end */ } = create(<Component />)

  let component
  /* code here */

  /* end */

  expect(component).toMatchSnapshot()
})