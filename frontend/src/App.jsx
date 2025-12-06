import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import MainContent from './components/MainContent'
import Loader from './components/Loader/Loader'
import Footer from './sections/Footer/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <div className="app">
      <Navbar />
      <div className="site-container">
        <MainContent />
      </div>
      <Footer />
    </div>
  )
}
