import React from 'react';

interface Item {
  image: string;
  title: string;
  subtitle: string;
  handle: string;
  borderColor: string;
  gradient: string;
  url: string;
}

interface ChromaGridProps {
  items: Item[];
  radius: number;
  damping: number;
  fadeOut: number;
  ease: string;
}

const ChromaGrid: React.FC<ChromaGridProps> = ({ items, radius, damping, fadeOut, ease }) => {
  return (
    <div className="chroma-grid" style={{ position: 'relative', width: '100%', height: '100%' }}>
      {items.map((item, index) => (
        <div
          key={index}
          className="chroma-item"
          style={{
            position: 'absolute',
            border: `2px solid ${item.borderColor}`,
            background: item.gradient,
            borderRadius: '50%',
            width: '100px',
            height: '100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
          onClick={() => window.open(item.url, '_blank')}
        >
          <img src={item.image} alt={item.title} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', bottom: '-30px', textAlign: 'center' }}>
            <div>{item.title}</div>
            <div>{item.subtitle}</div>
            <div>{item.handle}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChromaGrid;