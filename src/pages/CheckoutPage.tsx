import { useForm } from 'react-hook-form'
type Form = { name:string; address:string; card:string }
export function CheckoutPage(){
  const { register, handleSubmit, formState:{errors}, reset } = useForm<Form>()
  function onSubmit(_:Form){ alert('Order placed!'); reset() }
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-3 max-w-lg">
        <label><span className="block">Name</span>
          <input className="border rounded px-3 py-2 w-full" {...register('name', {required:true})}/>
          {errors.name && <span role="alert" className="text-red-600 text-sm">Required</span>}
        </label>
        <label><span className="block">Address</span>
          <input className="border rounded px-3 py-2 w-full" {...register('address', {required:true})}/>
          {errors.address && <span role="alert" className="text-red-600 text-sm">Required</span>}
        </label>
        <label><span className="block">Card</span>
          <input className="border rounded px-3 py-2 w-full" {...register('card', {required:true, minLength:8})}/>
          {errors.card && <span role="alert" className="text-red-600 text-sm">Min 8 chars</span>}
        </label>
        <button className="underline mt-2">Place order</button>
      </form>
    </section>
  )
}