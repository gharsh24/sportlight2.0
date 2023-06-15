import React, { useState } from 'react';
import "../css/CardPicker.css";

function CardPicker() {
  const [selectedCard, setSelectedCard] = useState(null);

  const selectImage = (card) => {
    setSelectedCard(card);
  };

  const handleDocumentClick = (event) => {
    const targetElement = event.target;
    if (targetElement.tagName.toLowerCase() !== 'img') {
      setSelectedCard(null);
    }
  };

  const bodyStyle = {
    overflow: 'hidden',
    height: '100vh',
    margin: '0',
    backgroundColor: '#2f333e',
    flexWrap: 'wrap',
    transform: 'scale(0.8)',
  };


  const myStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '5px',
  };

  const imgStyle = {
    transition: '0.3s',
    userSelect: 'none',
    position: 'absolute',
    width: '300px',
    borderRadius: '20px',
    boxShadow: '-20px 0px 20px rgba(0, 0, 0, 0.4)',
    transform: 'rotateY(40deg)',
  };

  return (
    <div style={bodyStyle}>
    <div onClick={handleDocumentClick} style={myStyle}>
      <div
        className={`cardcardPicker ${selectedCard === 1 ? 'selected' : 'blur'}`}
        onClick={() => selectImage(1)}
      >
        <img src="https://i.imgur.com/x3nxu2W.png" alt="Image 1"  style={imgStyle} />
      </div>

      <div
        className={`cardcardPicker ${selectedCard === 2 ? 'selected' : 'blur'}`}
        onClick={() => selectImage(2)}
      >
        <img src="https://i.imgur.com/d5LcHlk.png" alt="Image 2"  style={imgStyle} />
      </div>

      <div
        className={`cardcardPicker ${selectedCard === 3 ? 'selected' : 'blur'}`}
        onClick={() => selectImage(3)}
      >
        <img src="https://i.imgur.com/5IxsfqN.png" alt="Image 3" style={imgStyle}  />
      </div>

      <div
        className={`cardcardPicker ${selectedCard === 4 ? 'selected' : 'blur'}`}
        onClick={() => selectImage(4)}
      >
        <img src="https://i.imgur.com/67qVVB7.png" alt="Image 4"  style={imgStyle} />
      </div>

      <div
        className={`cardcardPicker ${selectedCard === 5 ? 'selected' : 'blur'}`}
        onClick={() => selectImage(5)}
      >
        <img src="https://i.imgur.com/suCBV3K.png" alt="Image 5"  style={imgStyle} />
      </div>
    </div>
    </div>
  );
}

export default CardPicker;
