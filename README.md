
# Easy Shop Lite (React + TypeScript)

[![Live Demo](https://img.shields.io/badge/demo-online-green?style=for-the-badge&logo=vercel)](https://easy-shop-lite.vercel.app)
[![GitHub Repo](https://img.shields.io/badge/github-repo-blue?style=for-the-badge&logo=github)](https://github.com/iliec9145/easy-shop-lite)
[![UX/UI Portfolio Figma Design web & mobile](https://img.shields.io/badge/figma-portfolio-orange?style=for-the-badge&logo=figma)](https://bit.ly/3ZyyUFE)

This demo implements the **core e-commerce UI**: search bar, cart functionality, routing, state management (Zustand), and form handling.  
Products are fetched from the public **Fake Store API**, which provides demo data (images, descriptions, prices).  

This way, the project demonstrates both **UI implementation** and **API integration** in a real-world scenario.


A portfolio-ready demo built to showcase **Frontend Engineer** skills:
- React 18 + TypeScript + Vite
- Routing (react-router), State (Zustand), Forms (react-hook-form)
- API integration (Fake Store API)
- TailwindCSS styling
- Tests: Jest + React Testing Library; E2E: Cypress
- Storybook (component catalog)
- Accessibility & Performance (Lighthouse checklist below)

## 1) Quickstart
```bash
npm i
npm run dev
# open http://localhost:5173
```

## 2) Scripts
- `npm run dev` – start Vite dev server
- `npm run build` – type-check + build
- `npm run test` / `test:watch` – unit tests (Jest + RTL)
- `npm run storybook` – Storybook @ http://localhost:6006
- `npm run cypress` – open Cypress runner

## 3) Features to check
- Catalog with search/filter, Product page, Cart with global state and persistence, Checkout form with validation

## 4) Tech stack
React 18, TypeScript, Vite, TailwindCSS, Zustand, React Hook Form, React Router, Axios, Jest, RTL, Cypress, Storybook.

## 5) Deployment (Vercel)
1. Push the repo to GitHub (public or private).
2. Go to [https://vercel.com/new](https://vercel.com/new).
3. Import your GitHub repo, select `main` branch.
4. Vercel auto-detects **Vite + React + TS**. Just click Deploy.
5. After ~1 min you get a live URL: `https://easy-shop-lite-yourname.vercel.app`.

## 6) Lighthouse & Accessibility Checklist
- [ ] Images use `loading=lazy`
- [ ] Semantic HTML (headings, labels, nav, buttons)
- [ ] Accessible forms (labels, aria attributes, error messages)
- [ ] Keyboard navigation (Tab focus visible, Enter/Space for buttons)
- [ ] Color contrast > 4.5:1 for text
- [ ] Lighthouse target scores: Performance >90, Accessibility >90

---

## 7) Example Tests

### Unit test (CatalogPage)
```tsx
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { CatalogPage } from '../src/pages/CatalogPage'
test('renders search input', () => {
  render(<MemoryRouter><CatalogPage /></MemoryRouter>)
  expect(screen.getByPlaceholderText(/search products/i)).toBeInTheDocument()
})
```

### Unit test (CartPage)
```tsx
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { CartPage } from '../src/pages/CartPage'
import { useCart } from '../src/store/cart'

test('shows empty cart message', () => {
  render(<MemoryRouter><CartPage /></MemoryRouter>)
  expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument()
})
```

### E2E test (Cypress)
```js
describe('Checkout flow', () => {
  it('adds product to cart and checks out', () => {
    cy.visit('/')
    cy.findByPlaceholderText(/search products/i).type('bag')
    cy.findByRole('button', { name: /add to cart/i }).first().click()
    cy.findByRole('link', { name: /cart/i }).click()
    cy.findByRole('link', { name: /checkout/i }).click()
    cy.findByRole('heading', { name: /checkout/i }).should('exist')
  })
})
```


---

## Deploy on Vercel (recommended)
1. Push the repo to GitHub.
2. Create a Vercel account (if needed) and **Import Project** from GitHub.
3. Framework preset: **Vite** (auto-detected).
4. Root directory: `/` (default). No special build settings needed.
5. Click **Deploy** → you'll get a live URL: `https://<your-app>.vercel.app`.

## Testing
- Unit tests (Jest + RTL): `npm run test`
- E2E tests (Cypress):
  ```bash
  npm run dev  # in one terminal
  npm run cypress  # in another terminal
  ```

## Storybook
- `npm run storybook` → http://localhost:6006

## Lighthouse & Accessibility Checklist
- [ ] Use semantic HTML (`<main>`, `<nav>`, headings order, labels)
- [ ] Ensure keyboard navigation works (focus visible, tab order)
- [ ] Images lazy-loaded (`loading="lazy"`), proper `alt` text
- [ ] Color contrast passes WCAG AA (Chrome DevTools → Lighthouse → Accessibility)
- [ ] Bundle size & Performance: code-splitting for routes, avoid unnecessary re-renders (`React.memo`, `useMemo`, `useCallback`)
- [ ] Provide loading/skeleton states for async routes and API calls
- [ ] Meta tags for SEO (title, description)

## Suggested Improvements (next steps)
- Add TypeScript types for API responses (already partially added in hooks)
- Add React Query (TanStack) for caching & retries
- Introduce CI (GitHub Actions) with `npm ci`, tests, and build
- Add Chromatic for Storybook hosting and visual regression tests
