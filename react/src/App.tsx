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
  projects: string[],
  skills: string[],
  technologies: string[],
}

function App() {
  const [portfolioOwner, setPortfolioOwner] = useState<PortfolioOwner | null>(null)
  const [selfieUrl, setSelfieUrl] = useState<string | undefined>();
  const [hasFetchedPortfolioOwner, setHasFetchedPortfolioOwner] = useState(false);

  useEffect(() => {
    const fetchPortfolioOwner = async () => {
      if (hasFetchedPortfolioOwner) return;

      const email = 'yuhriparada@gmail.com';
      const response = await axios.post(`api/v1/powner_profile`, { email });
      const byteCharacters = atob(response.data.selfie);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: 'image/jpeg' });
      const url = URL.createObjectURL(blob);
      setSelfieUrl(url);
      localStorage.setItem('selfieUrl', url);
      setPortfolioOwner(response.data);
      setHasFetchedPortfolioOwner(true);
    };

    fetchPortfolioOwner();
  }, [hasFetchedPortfolioOwner]);

  return (
    <>
      <Navbar />
      <Section1 portfolioOwner={portfolioOwner} selfieUrl={selfieUrl} />
      <Section2 />
      <Footer />
    </>
  )
}

export default App;
