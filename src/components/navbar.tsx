import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBar from './searchBar'
import { Home, Bell, ShoppingCart } from 'lucide-react'
import ShoppingCartIcon from './shoppingCartIcon'

const Navbar = ()=> {
  return (
    <nav className="w-full flex items-center justify-between pb-4 border-b border-gray-200">
          {/* left */}
          <Link href="/" className="flex items-center tracking-wider">
              <Image src="/Capt2.png" alt="TrendGh" width={360} height={36} className="w-6 h-6 md:w-9 md:h-9" />
              <p className=" hidden md:block text-md font-medium">
                  TrendGh
                  
              </p>
          </Link>
          {/* right */}
      <div className="flex items-center gap-6">
        <SearchBar />
        <Link href="/">
          <Home className="w-4 h-4 text-gray-400" />
        </Link >
        <Bell className="w-4 h-4 text-gray-400" />
        <ShoppingCartIcon /> 
        <Link href="/Login">
          Sign in
        </Link>
          </div>
      
    </nav>
  )
}

export default Navbar
