
import React from 'react'
import { Link } from 'react-router-dom'


const card = () => {
  return (
    <nav  className='bg-slate-800 p-4'>
      <ul className='flex justify-center gap-12  mt-3 bg-slate-800 text-lg text-white m-9 my-6' >
       <li className=' hover:text-yellow-400 hover:underline'>
       <Link to={'/Home'}>Home </Link>
       </li>
       <li className='hover:text-yellow-400 hover:underline'> 
       <Link to={'/Login'}>Login</Link>
       </li>
       <li className='hover:text-yellow-400 hover:underline'>
        <Link to={'/Product'}>Products</Link>
       </li>

       <li className='hover:text-yellow-400 hover:underline'>
        <Link to={'/Content'}>Content</Link>
       </li>
       <li className='hover:text-yellow-400 hover:underline'>
        <Link to={'/Singleproduct'}>SingleProduct</Link>
       </li>
      </ul>
    </nav>
  )
}

export default card
