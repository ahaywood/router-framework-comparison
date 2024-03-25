import { render } from '@redwoodjs/testing/web'

import AboutLayout from './AboutLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AboutLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AboutLayout />)
    }).not.toThrow()
  })
})
