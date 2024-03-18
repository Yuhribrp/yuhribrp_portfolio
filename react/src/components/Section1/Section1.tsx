import { PortfolioOwner } from '../../App';
import styles from './Section1.module.css';
import AutoTyping from './AutoTyping';
import banner from '../../assets/banners/section1-banner.jpg';
import IconRow from './IconRow';

type Section1Props = {
  portfolioOwner: PortfolioOwner | null;
  selfieUrl?: string;
};

const Section1: React.FC<Section1Props> = ({ portfolioOwner, selfieUrl }) => {
  const firstName = portfolioOwner?.name.split(' ')[0];
  const typingText = [
    `Hello, my name is ${firstName}`,
    `I am ${portfolioOwner?.age} years old`,
    `${portfolioOwner?.about_me}` ,
    `From ${portfolioOwner?.location}`,
    `You can see my resume up there in the Menu`,
    `Feel free to reach out !`
  ];

  return (
    <section className={styles.section1}>
      <div className={styles.backgroundImage} style={{ backgroundImage: `url(${banner})` }}></div>
      <div className={styles.content}>
        <div className={styles.leftContent}>
          <IconRow />
        </div>
        <img src={selfieUrl} alt="Selfie" className={styles.selfie} />
        <div className={styles.pownerInfo}>
          <AutoTyping text={typingText} />
          <div style={{ width: '300px' }}></div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
