import React, { useEffect, useState } from 'react';

const Loading: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 10;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-container" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    //   backgroundColor: '#e0e0e0',
        backgroundImage: 'url("/bg.webp")',
        zIndex: 9999
    }}>
      <img src="https://imgur.com/68Yh5vE.png" alt="Loading" style={{ width: '100px', marginBottom: '20px' }} />
      <div style={{ width: '200px', backgroundColor: '#e0e0e0', borderRadius: '5px', margin: '20px 0' }}>
        <div
          style={{
            width: `${progress}%`,
            height: '10px',
            backgroundColor: '#76c7c0',
            borderRadius: '5px',
            transition: 'width 0.1s ease-in-out',
          }}
        />
      </div>
      <div>{progress}%</div>
    </div>
  );
};

export default Loading;