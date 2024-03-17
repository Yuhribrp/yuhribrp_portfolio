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
  const [selfieUrl, setSelfieUrl] = useState<string | undefined>();
  const [hasFetchedPortfolioOwner, setHasFetchedPortfolioOwner] = useState(false);

  useEffect(() => {
    const fetchPortfolioOwner = async () => {
      if (hasFetchedPortfolioOwner) return;

      const response = await axios.get('api/v1/portfolio_owners/1');
      setPortfolioOwner(response.data);
      setHasFetchedPortfolioOwner(true);
    };

    const fetchSelfie = async () => {
      const email = 'yuhriparada@gmail.com';
      const response = await axios.post("api/v1/download_selfie", {
        email: email,
      }, {
        responseType: 'blob'
      });
      const blob = new Blob([response.data], { type: response.headers['content-type'] });
      const url = URL.createObjectURL(blob);
      setSelfieUrl(url);
      localStorage.setItem('selfieUrl', url);
    };

    const url = localStorage.getItem('selfieUrl');
    if (url) {
      setSelfieUrl(url);
    } else {
      fetchSelfie();
    }

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
