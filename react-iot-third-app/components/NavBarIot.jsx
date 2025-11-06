import React from 'react'

export default function NavBarIot() {
  return (
    <div className='flex justify-center gap-5 p-5 bg-blue-600 text-white'>
        <Link to="/pageA"> หน้า A </Link>
        <Link to="/pageB"> หน้า B </Link>
        <Link to="/pageC"> หน้า C </Link>
        <Link to="/pageD"> หน้า D </Link>

    </div>
  )
}
