import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import { CartPage } from '../src/pages/CartPage'
import { useCart } from '../src/store/cart'

test('shows total for items in cart', () => {
  // seed cart
  const { add, clear } = useCart.getState()
  clear()
  add({ id: 1, title: 'Item A', price: 10 })
  add({ id: 2, title: 'Item B', price: 5 })
  add({ id: 2, title: 'Item B', price: 5 }) // qty becomes 2

  render(
    <MemoryRouter>
      <CartPage />
    </MemoryRouter>
  )

  expect(screen.getByText(/item a/i)).toBeInTheDocument()
  expect(screen.getByText(/item b/i)).toBeInTheDocument()
  expect(screen.getByText(/Total: \$20.00/i)).toBeInTheDocument()
})
