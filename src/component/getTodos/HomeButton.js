import React from 'react';

export default function HomeButton() {
  const handleClik = () => {
    window.location.assign('/');
  };
  return (
    <div>
      <button className="home-button" onClick={handleClik}>
        Home
      </button>
    </div>
  );
}
