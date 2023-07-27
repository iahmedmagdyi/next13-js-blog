"use client"
import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import { SessionProvider } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog',
  description: 'Generated by create next app',
}

export default function RootLayout({ children,session }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <SessionProvider session={session}>
      <Navbar/>
        {children}
         <Footer/>
      </SessionProvider>
     
        </body>
    </html>
  )
}