import React from 'react';
import { Header } from '@/Header'
import { Footer } from '@/Footer'
import { Menu } from '@/Menu'
import { Loader } from '@/Loader'
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
const LayoutWrapper = ({children}) => {
    // retrive the data from the store
    const state=useSelector((state)=>state) //return the store data
    console.log(10,state)
  return (
    <div>
          <Header />
          {state?.appReducers?.isLoggedIn && <Menu />}
          {children}
          {state?.appReducers?.isShowLoader && <Loader />}
          <Footer />
          <ToastContainer/>
    </div>
  );
}

export default LayoutWrapper;
