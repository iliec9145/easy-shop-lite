import { useCart } from '../store/cart'
import { Link } from 'react-router-dom'
export function CartPage(){
  const { items, setQty, remove, clear } = useCart()
  const total = items.reduce((s,i)=> s + i.price*i.qty, 0)
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-4">Cart</h1>
      {items.length===0 ? <p>Your cart is empty.</p> : (
        <>
          <ul className="flex flex-col gap-3">
            {items.map(i=> (
              <li key={i.id} className="border rounded p-3 flex items-center gap-3">
                <div className="font-medium flex-1">{i.title}</div>
                <input type="number" min={1} value={i.qty} onChange={e=>setQty(i.id, Number(e.target.value))}
                  className="w-16 border rounded px-2 py-1" aria-label={`qty ${i.title}`} />
                <div className="w-24 text-right">${(i.price*i.qty).toFixed(2)}</div>
                <button className="underline" onClick={()=>remove(i.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center justify-between">
            <div className="text-xl font-semibold">Total: ${total.toFixed(2)}</div>
            <Link to="/checkout" className="underline">Checkout</Link>
          </div>
          <button className="mt-2 underline" onClick={clear}>Clear cart</button>
        </>
      )}
    </section>
  )
}