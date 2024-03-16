import { CSSProperties } from 'react';

const overlay: CSSProperties = {
  backgroundColor: 'rgba(0, 0, 0, 0.85)'
};

const content: CSSProperties = {
  width: '50vw',
  height: '50vh',
  maxWidth: '400px',
  maxHeight: '200px',
  color: 'black',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '10%',
  fontWeight: 'bold',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.7)'
};

export const modalStyles = {
  overlay,
  content
};
