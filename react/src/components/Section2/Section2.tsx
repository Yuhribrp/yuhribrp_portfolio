// import { PortfolioOwner } from '../../App';
import React, { useRef, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './Section2.module.css';
import cardBg1 from '../../assets/cards/card-bg1.jpg';
import cardBg2 from '../../assets/cards/card-bg2.jpg';

const slides = [
  {
    title: "Machu Picchu",
    subtitle: "Peru",
    description: "Adventure is never far away",
    image: cardBg1,
    imageName: "Rolê Canino"
  },
  {
    title: "Chamonix",
    subtitle: "France",
    description: "Let your dreams come true",
    image: cardBg2,
    imageName: "Receipts Api"
  }
];

function useTilt() {
  const ref = useRef(null);

  useEffect(() => {
    const tiltElement = ref.current;
    const handleMouseMove = (event) => {
      if (!tiltElement) return;
      const { left, top, width, height } = tiltElement.getBoundingClientRect();
      const x = (event.pageX - left) / width - 0.5;
      const y = (event.pageY - top) / height - 0.5;
      tiltElement.style.transform = `rotateX(${-y * 15}deg) rotateY(${x * 15}deg)`;
    };
    tiltElement.addEventListener('mousemove', handleMouseMove);
    return () => tiltElement.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return ref;
}

function Slide({ slide }: { slide: typeof slides[0] }) {
  const tiltRef = useTilt();
  return (
    <div className={styles.slide} ref={tiltRef}>
      <div
        className={styles.slideBackground}
        style={{
          backgroundImage: `url('${slide.image}')`
        }}
      />
      <div
        className={styles.slideContent}
        style={{
          backgroundImage: `url('${slide.image}')`
        }}
      >
        <div className={styles.slideContentInner}>
          <h2 className={styles.slideTitle}>{slide.title}</h2>
          <h3 className={styles.slideSubtitle}>{slide.subtitle}</h3>
          <p className={styles.slideDescription}>{slide.description}</p>
        </div>
        <p className={styles.slideImageName}>{slide.imageName}</p>
      </div>
    </div>
  );
}

const Section2: React.FC = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
    >
      {slides.map((slide, i) => (
        <Slide slide={slide} key={i} />
      ))}
    </Carousel>
  );
};

export default Section2;
