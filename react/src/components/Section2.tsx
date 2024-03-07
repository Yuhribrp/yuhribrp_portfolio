import React from 'react';
import { PortfolioOwner } from '../App';
import styles from './styles/Section2.module.css';

type Section2Props = {
  portfolioOwner: PortfolioOwner | null;
};

const Section2: React.FC<Section2Props> = ({ portfolioOwner }) => {
  return (
    <section className={styles.section2}>
      {portfolioOwner?.projects.map((project, index) => (
        <div key={index} className={styles.card}>
          <h3>Project {index + 1}</h3>
          <p>{project}</p>
        </div>
      ))}
    </section>
  );
};

export default Section2;
