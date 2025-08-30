import axios from 'axios'
export type Product = { id:number; title:string; price:number; image:string; category:string; description:string }
export async function fetchProducts(){ const {data} = await axios.get('https://fakestoreapi.com/products'); return data as Product[] }
export async function fetchProduct(id:string){ const {data} = await axios.get('https://fakestoreapi.com/products/'+id); return data as Product }
