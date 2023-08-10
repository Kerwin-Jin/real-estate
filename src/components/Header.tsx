import React, { useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router'

export default function Header() {

  const navigate = useNavigate()
  const location = useLocation()


  const jump = useCallback((path: string) => {
    return () => {
      navigate(path)
    }
  }, [navigate])

  const highLight = useCallback((path: string) => {
    return location.pathname === path
  }, [location.pathname])
  return (
    <div>
      <header className='flex items-center justify-between mx-auto max-w-7xl'>
        <img src="https://www.designevo.com/media/header/images/designevo-logo.png" alt="logo" className='h-10 cursor-pointer' />
        <ul className='flex space-x-6'>
          <li onClick={jump('/')} className={`cursor-pointer border-b-4  ${highLight('/') ? 'border-b-green-300 font-bold' : 'border-b-transparent'}`}>Home</li>
          <li onClick={jump('/offers')} className={`cursor-pointer border-b-4  ${highLight('/offers') ? 'border-b-green-300 font-bold' : 'border-b-transparent'}`} >Offers</li>
          <li onClick={jump('/sign-in')} className={`cursor-pointer border-b-4  ${highLight('/sign-in') ? 'border-b-green-300 font-bold' : 'border-b-transparent'}`}>Sign In</li>
        </ul>
      </header>
    </div>
  )
}
