import React from 'react';
import { PortfolioOwner } from '../App';
import styles from './styles/Section1.module.css';

type Section1Props = {
  portfolioOwner: PortfolioOwner | null;
};

const Section1: React.FC<Section1Props> = ({ portfolioOwner }) => {
  return (
    <section className={styles.section1}>
      <h2>{portfolioOwner?.name}</h2>
      <p>Age: {portfolioOwner?.age}</p>
      <p>Location: {portfolioOwner?.location}</p>
      <p>About Me: {portfolioOwner?.about_me}</p>
    </section>
  );
};

export default Section1;
