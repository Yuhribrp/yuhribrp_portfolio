import React, { useRef, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BeatLoader } from 'react-spinners';
import styles from './Section2.module.css';
import { modalStyles } from './modalStyles';
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (slide.link === "") {
      e.preventDefault();
      setIsModalOpen(true);
    } else {
      window.location.href = slide.link;
    }
  };

  const handleCloseClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsModalOpen(false);
  };

  return (
    <div className={styles.slide} ref={tiltRef}>
      <div
        className={styles.slideContent}
        style={{
          backgroundImage: `url('${slide.image}')`
        }}
        onClick={handleClick} // Mova o evento de clique para cá
      >
        <span className={styles.slideImageName}>
          {slide.imageName}
        </span>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          style={modalStyles}
          contentLabel="Example Modal"
        >
          <div style={{ position: 'absolute', top: '.1rem', right: '.5rem', color: 'rgb(144, 26, 26)', cursor: 'pointer' }} onClick={handleCloseClick}>X</div>
          <h2 style={{ fontSize: '1.3rem', marginBottom: '2rem', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>Project under development</h2>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <p>available soon, stay tuned</p>
            <br />
            <BeatLoader color={"#123abc"} loading={true} size={6} />
          </div>
        </Modal>
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
