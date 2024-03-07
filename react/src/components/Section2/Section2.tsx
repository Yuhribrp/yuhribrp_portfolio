import React from 'react';
import { PortfolioOwner } from '../../App';
import styles from './Section2.module.css';
import cardBg1 from '../../assets/cards/card-bg1.jpg';
import cardBg2 from '../../assets/cards/card-bg2.jpg';

type Section2Props = {
  portfolioOwner: PortfolioOwner | null;
};

const Section2: React.FC<Section2Props> = ({ portfolioOwner }) => {
  return (
    <section className={styles.section2}>
      {portfolioOwner?.projects.map((project, index) => (
        <div key={index} className={styles.card}>
          <div
            className={styles.cardImage}
            style={{backgroundImage: `url(${index % 2 === 0 ? cardBg1 : cardBg2})`}}
          ></div>
          <h3>{project}</h3>
        </div>
      ))}
    </section>
  );
};

export default Section2;
