import { create } from 'zustand'
type Item = { id:number; title:string; price:number; qty:number }
type State = { items:Item[]; add:(p:Omit<Item,'qty'>)=>void; remove:(id:number)=>void; setQty:(id:number,qty:number)=>void; clear:()=>void }
export const useCart = create<State>((set)=> ({
  items:[],
  add: (p)=> set((s)=>{
    const e = s.items.find(i=>i.id===p.id)
    if(e) return { items: s.items.map(i=>i.id===p.id?{...i, qty:i.qty+1}:i) }
    return { items: [...s.items, {...p, qty:1}] }
  }),
  remove: (id)=> set((s)=>({ items: s.items.filter(i=>i.id!==id) })),
  setQty: (id,qty)=> set((s)=>({ items: s.items.map(i=>i.id===id?{...i, qty}:i) })),
  clear: ()=> set({ items:[] })
}))