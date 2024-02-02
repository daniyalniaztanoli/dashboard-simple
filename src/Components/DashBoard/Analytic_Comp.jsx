import React from 'react'
import { Link } from 'react-router-dom';

const Analytic_Comp = () => {
  return (
    <div className='w-[100%]'>
    <div className='flex'>
    <div className='flex w-[20%]'>
        
    <ul className='h-screen space-y-6 ms-10 text-start w-full'>
            <h1 className='text-2xl font-bold my-6'>Tech.com DashBoard</h1>
            <li className='mb-5 font-bold text-xl hover:text-gray-600 cursor-pointer'><Link to='/Dashboard'> Dashboard </Link></li>
            <li className='mb-5 font-bold text-xl hover:text-gray-600 cursor-pointer'><Link to='/orderlist'> Order List </Link></li>
            <li className='mb-5 font-bold text-xl hover:text-gray-600 cursor-pointer'><Link to='/customer'> Customer </Link></li>
            <li className='mb-5 font-bold text-xl hover:text-gray-600 cursor-pointer bg-green-600 text-white p-2 w-32 rounded'><Link to='/analytic'>Analytics</Link></li>
            <li className='mb-5 font-bold text-xl hover:text-gray-600 cursor-pointer'><Link to='/review'>Reviews</Link> </li>
           <li className='mb-5 font-bold text-xl hover:text-gray-600 cursor-pointer'><Link to='/food'>Foods</Link></li>
            <li className='mb-5 font-bold text-xl hover:text-gray-600 cursor-pointer'><Link to='/food_detail'>Food Detail</Link></li>
            <li className='mb-5 font-bold text-xl hover:text-gray-600 cursor-pointer'><Link to='/customer_detail'>Customer Detail</Link></li>
            <li className='mb-5 font-bold text-xl hover:text-gray-600 cursor-pointer'><Link to='/calender'>Calender</Link></li>
            <li className='mb-5 font-bold text-xl hover:text-gray-600 cursor-pointer'><Link to='/chat'>Chat</Link></li>
            <li className='mb-5 font-bold text-xl hover:text-gray-600 cursor-pointer'><Link to='/wallet'>Wallet</Link></li>
        </ul>
  </div>
  <div className='w-[80%] bg-green-300'>
   <h1 className='text-dark font-mono font-bold text-4xl flex justify-center h-56 items-center'>Analytics Section</h1>
  </div>
    </div>
 
</div>
  )
}

export default Analytic_Comp;
