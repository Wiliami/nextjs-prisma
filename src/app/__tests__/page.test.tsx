import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../page'

describe('Page', () => {
  it('Renders a heading', () => {
    render(<Page />)
 
    const heading = screen.getByRole('heading', { level: 1 })
 
    expect(heading).toBeInTheDocument()
  })
})
// declaração, instrução e 

// select username from users u inner join posts p on u.user_id = p.user_id where u.user_id = 1;