import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchProduct, type Product } from '../hooks/useProducts'
import { useCart } from '../store/cart'

export function ProductPage(){
  const { id } = useParams()
  const [p,setP] = useState<Product|null>(null)
  const add = useCart(s=>s.add)
  useEffect(()=>{ if(id) fetchProduct(id).then(setP) },[id])
  if(!p) return <p>Loading…</p>
  return (
    <article className="grid md:grid-cols-2 gap-6">
      <img src={p.image} alt={p.title} className="h-80 object-contain" />
      <div>
        <h1 className="text-2xl font-semibold">{p.title}</h1>
        <p className="mt-2 opacity-80">{p.description}</p>
        <p className="mt-2 text-xl">${p.price.toFixed(2)}</p>
        <button className="mt-4 underline" onClick={()=>add({id:p.id,title:p.title,price:p.price})}>Add to cart</button>
      </div>
    </article>
  )
}