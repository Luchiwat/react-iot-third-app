import React from 'react'
import HeaderIot from '../components/HeaderIot.jsx'
import NavBarIot from '../components/NavBarIot.jsx'
import Footerlot from '../components/Footerlot.jsx'

export default function pagea() {
  return (
    <div>
        <NavBarIot />
        <HeaderIot wow="หน้าA" woo="^_^"/>
        PageA
        <Footerlot />
    </div>
  )
}
