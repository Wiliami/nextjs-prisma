import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from './page'

describe('Page', () => {
  it('Renders a heading', () => {
    render(<Page />)
 
    const heading = screen.getByRole('heading', { level: 1 })
    // return, funções atruídas a variáveis
 
    expect(heading).toBeInTheDocument()
  })
})