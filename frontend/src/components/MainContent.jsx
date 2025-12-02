import React from 'react'
import '../styles/site.css'
import Home from '../sections/Home'
import Clubs from '../sections/Clubs/Clubs'

export default function MainContent(){
  return (
    <main className="main">
      <Home />
      <Clubs />
    </main>
  )
}
