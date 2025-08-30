import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import { Button } from '../src/components/Button'
test('renders button text', () => {
  render(<Button>Click me</Button>)
  expect(screen.getByText(/click me/i)).toBeInTheDocument()
})
