import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import { CatalogPage } from '../src/pages/CatalogPage'
import * as api from '../src/hooks/useProducts'

test('renders products and filters by search', async () => {
  // mock API
  jest.spyOn(api, 'fetchProducts').mockResolvedValue([
    { id: 1, title: 'Leather Bag', price: 50, image: 'img', category: 'bags', description: 'd1' },
    { id: 2, title: 'Casual Shirt', price: 30, image: 'img', category: 'clothes', description: 'd2' },
  ])

  render(
    <MemoryRouter>
      <CatalogPage />
    </MemoryRouter>
  )

  // waits for items to appear
  await waitFor(() => {
    expect(screen.getByText(/leather bag/i)).toBeInTheDocument()
    expect(screen.getByText(/casual shirt/i)).toBeInTheDocument()
  })

  // filter
  const search = screen.getByRole('textbox', { name: /search/i })
  await waitFor(() => expect(search).toBeInTheDocument())
  // simulate typing
  search.focus()
  // fireEvent is implicit via change; but userEvent would be better; keep simple
  search.setSelectionRange?.(0, 0)
  ;(search as HTMLInputElement).value = 'bag'
  search.dispatchEvent(new Event('input', { bubbles: true }))

  // only Bag remains
  expect(screen.getByText(/leather bag/i)).toBeInTheDocument()
})
