import React from 'react'
import HeaderIot from '../components/HeaderIot.jsx'
import NavBarIot from '../components/NavBarIot.jsx'
import Footerlot from '../components/Footerlot.jsx'

export default function pageC() {
  return (
    <div>
      <NavBarIot />
      <HeaderIot wow="หน้าC" woo="^_^"/>
      PageC
      <Footerlot />
    </div>
  )
}
