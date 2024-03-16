// import { PortfolioOwner } from '../../App';
import React, { useRef, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './Section2.module.css';
import cardBg1 from '../../assets/cards/card-bg1.jpg';
import cardBg2 from '../../assets/cards/card-bg2.jpg';
import cardBg3 from '../../assets/cards/card-bg3.jpg';
import cardBg4 from '../../assets/cards/card-bg4.jpg';

const slides = [
  {
    imageName: "Rolê Canino",
    image: cardBg1,
    link: ""
  },
  {
    imageName: "Receipts Api",
    image: cardBg2,
    link: ""
  },
  {
    imageName: "Cryptofolio",
    image: cardBg3,
    link: ""
  },
  {
    imageName: "Torcida na Rede",
    image: cardBg4,
    link: ""
  }
];

function useTilt() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tiltElement = ref.current;
    const handleMouseMove = (event: { pageX: number; pageY: number; }) => {
      if (!tiltElement) return;
      const { left, top, width, height } = tiltElement.getBoundingClientRect();
      const x = (event.pageX - left) / width - 0.5;
      const y = (event.pageY - top) / height - 0.5;
      tiltElement.style.transform = `rotateX(${-y * 10}deg) rotateY(${x * 10}deg)`;
    };
    tiltElement?.addEventListener('mousemove', handleMouseMove);
    return () => tiltElement?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return ref;
}

function Slide({ slide }: { slide: typeof slides[0] }) {
  const tiltRef = useTilt();
  return (
    <div className={styles.slide} ref={tiltRef}>
      <div
        className={styles.slideContent}
        style={{
          backgroundImage: `url('${slide.image}')`
        }}
      >
        <a
          href={slide.link}
          className={styles.slideImageName}
          onMouseEnter={(e) => e.currentTarget.classList.add('animate')}
          onMouseLeave={(e) => e.currentTarget.classList.remove('animate')}
        >
          {slide.imageName}</a>
      </div>
    </div>
  );
}

const Section2: React.FC = () => {
  return (
    <div id="section2">
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
    </div>
  );
};

export default Section2;
