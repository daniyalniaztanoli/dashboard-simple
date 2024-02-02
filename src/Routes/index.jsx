import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Side_Nav from '../Components/Side_Nav';
import Dashboard_Comp from '../Components/DashBoard/Dashboard_Comp';
import Order_Comp from '../Components/DashBoard/Order_Comp';
import Customer_Comp from '../Components/DashBoard/Customer_Comp';
import Analytic_Comp from '../Components/DashBoard/Analytic_Comp';
import Review_Comp from '../Components/DashBoard/Review_Comp';
import Food_Comp from '../Components/DashBoard/Food_Comp';
import Food_Detail_Comp from '../Components/DashBoard/Food_Detail_Comp';
import Calender_Comp from '../Components/DashBoard/Calender_Comp';
import Chat_Comp from '../Components/DashBoard/Chat_Comp';
import Wallet_Comp from '../Components/DashBoard/Wallet_Comp';
import Customer_Detail_Comp from '../Components/DashBoard/Customer_Detail_Comp';

const App_Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Side_Nav/>}/>
        <Route path='/DashBoard' element={<Dashboard_Comp/>}/>
        <Route path='/orderlist' element={<Order_Comp/>}/>
        <Route path='/customer' element={<Customer_Comp/>}/>
        <Route path='/analytic' element={<Analytic_Comp/>}/>
        <Route path='/review' element={<Review_Comp/>}/>
        <Route path='/food' element={<Food_Comp/>}/>
        <Route path='/food_detail' element={<Food_Detail_Comp/>}/>
        <Route path='/customer_detail' element={<Customer_Detail_Comp/>}/>
        <Route path='/calender' element={<Calender_Comp/>}/>
        <Route path='/chat' element={<Chat_Comp/>}/>
        <Route path='/wallet' element={<Wallet_Comp/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App_Router;
