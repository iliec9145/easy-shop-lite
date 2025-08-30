import { useEffect, useMemo, useState } from 'react'
import { fetchProducts, type Product } from '../hooks/useProducts'
import { Link } from 'react-router-dom'
import { useCart } from '../store/cart'

export function CatalogPage(){
  const [products, setProducts] = useState<Product[]>([])
  const [q, setQ] = useState('')
  const add = useCart(s=>s.add)
  useEffect(()=>{ fetchProducts().then(setProducts) },[])
  const filtered = useMemo(()=>{
    const s = q.trim().toLowerCase()
    return !s ? products : products.filter(p=>p.title.toLowerCase().includes(s))
  },[q,products])
  return (
    <section>
      <div className="flex items-center gap-2 my-4">
        <label className="sr-only" htmlFor="search">Search</label>
        <input id="search" aria-label="Search" className="border px-3 py-2 rounded w-full"
          placeholder="Search products..." value={q} onChange={e=>setQ(e.target.value)} />
      </div>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map(p=> (
          <li key={p.id} className="border rounded p-3 flex flex-col">
            <img src={p.image} alt={p.title} className="h-40 object-contain" loading="lazy" />
            <h3 className="font-medium mt-2 line-clamp-2">{p.title}</h3>
            <p className="mt-1">${p.price.toFixed(2)}</p>
            <div className="mt-auto flex gap-2">
              <button className="underline" onClick={()=>add({id:p.id,title:p.title,price:p.price})}>Add to cart</button>
              <Link className="underline" to={`/product/${p.id}`}>Details</Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}