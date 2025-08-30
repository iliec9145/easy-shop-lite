import { ButtonHTMLAttributes } from 'react'
type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary'|'ghost' }
export function Button({ variant='primary', className='', ...rest }: Props){
  const base = 'px-4 py-2 rounded'
  const style = variant==='primary' ? 'bg-black text-white' : 'underline'
  return <button className={`${base} ${style} ${className}`} {...rest} />
}
