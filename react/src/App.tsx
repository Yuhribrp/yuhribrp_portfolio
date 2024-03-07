import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

export type PortfolioOwner = {
  id: number,
  name: string,
  age: number,
  location: string,
  about_me: string,
  selfie: string,
  projects: string[],
  skills: string[],
  technologies: string[],
}

function App() {
  const [portfolioOwner, setPortfolioOwner] = useState<PortfolioOwner | null>(null)

  useEffect(() => {
    axios.get('api/v1/portfolio_owners/1').then(response => setPortfolioOwner(response.data)).catch(console.error)
  }, [])

  return (
    <>
      <Navbar />
      <Section1 portfolioOwner={portfolioOwner} />
      <Section2 portfolioOwner={portfolioOwner} />
      <Footer />
    </>
  )
}

export default App
