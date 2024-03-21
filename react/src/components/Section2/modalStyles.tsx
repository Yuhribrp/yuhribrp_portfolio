import { CSSProperties } from 'react';

const overlay: CSSProperties = {
  backgroundColor: 'rgba(0, 0, 0, 0.85)',
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
  backgroundColor: 'rgba(255, 255, 255, 0.9)', // Aumenta a opacidade para um visual mais moderno
  borderRadius: '20px', // Adiciona bordas arredondadas
  boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)', // Adiciona sombra para dar profundidade
  padding: '20px', // Adiciona padding para dar espaço ao conteúdo
};

export const modalStyles = {
  overlay,
  content
};
