"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { Login } from '@/Login'
import { Home } from '@/Home'
import { useSelector } from 'react-redux'
export default function App() {
 const state= useSelector((state)=>state)
  return <div>
    {
      state ?.appReducers?.isLoggedIn ? <Home/>: <Login/>
    }
 
  </div>
}
