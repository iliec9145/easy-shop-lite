import { Routes, Route, Link } from 'react-router-dom'
import { CatalogPage } from './pages/CatalogPage'
import { ProductPage } from './pages/ProductPage'
import { CartPage } from './pages/CartPage'
import { CheckoutPage } from './pages/CheckoutPage'
export default function App() {
  return (
    <div className="container">
      <header className="py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">Easy Shop Lite</Link>
        <nav className="flex gap-4"><Link to="/cart" aria-label="cart" className="underline">Cart</Link></nav>
      </header>
      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </div>
  )
}