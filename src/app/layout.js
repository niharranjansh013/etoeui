"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'react-toastify/dist/ReactToastify.css';
import LayoutWrappeL from './layoutWrapper'
//get the store
import { appStore } from '@/store/appStore'
//provide the store using Provider
import { Provider } from 'react-redux'

const inter = Inter({ subsets: ['latin'] })

 function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={appStore}>
          <LayoutWrappeL>
            {children}
          </LayoutWrappeL>
        </Provider>
      </body>
    </html>
  )
}
export default RootLayout