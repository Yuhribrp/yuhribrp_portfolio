import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './components/About/About';
import Section2 from './components/Section2/Section2'
import Footer from './components/Footer/Footer';

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
  const [portfolioOwner, setPortfolioOwner] = useState(null);
  const [hasFetchedPortfolioOwner, setHasFetchedPortfolioOwner] = useState(false);

  useEffect(() => {
    const fetchPortfolioOwner = async () => {
      if (hasFetchedPortfolioOwner) return;

      const email = "yuhribrp.dev@gmail.com";
      const response = await axios.post(`api/v1/powner_profile`, { email });
      setPortfolioOwner(response.data);
      setHasFetchedPortfolioOwner(true);
    };

    fetchPortfolioOwner();
  }, [hasFetchedPortfolioOwner]);


  return (
    <Router>
      <Header />
      <main>
        <About portfolioOwner={portfolioOwner} />
      </main>
      <Section2 />
      <Footer />
    </Router>
  );
}


export default App;
