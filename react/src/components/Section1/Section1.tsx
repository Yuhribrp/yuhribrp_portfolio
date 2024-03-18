import { PortfolioOwner } from '../../App';
import styles from './Section1.module.css';
import banner from '../../assets/banners/section1-banner.jpg';
import IconRow from './IconRow';

type Section1Props = {
  portfolioOwner: PortfolioOwner | null;
  selfieUrl?: string;
};

const Section1: React.FC<Section1Props> = ({ portfolioOwner, selfieUrl }) => {
  return (
    <section className={styles.section1}>
      <div className={styles.backgroundImage} style={{ backgroundImage: `url(${banner})` }}></div>
      <div className={styles.content}>
        <div className={styles.leftContent}>
          <IconRow />
        </div>
        <img src={selfieUrl} alt="Selfie" className={styles.selfie} />
        <div className={styles.pownerInfo}>
          <h2>{portfolioOwner?.name}</h2>
          <div className={styles.info}>
            <p>Age: {portfolioOwner?.age}</p>
            <p>Location: {portfolioOwner?.location}</p>
            <p>About Me: {portfolioOwner?.about_me}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
