import React, { useState } from 'react';
import '../css/eventstyles.css';

const Events = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  function selectImage(cardnum){
    setSelectedCard(cardnum);
  }

  const resetSelection = () => {
    setSelectedCard(null);
  };

  const handleOutsideClick = (e) => {
    if (e.target.tagName.toLowerCase() !== 'img') {
      resetSelection();
    }
  };

  return (
    <main onClick={handleOutsideClick} className='mainn'>
      <div
        className={`ccard${selectedCard === 1 ? ' selected' : ''}`}
        onClick={() => selectImage(1)}
      >
        <img className='card-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ287prMsOrfkvG8AiBlE2EjbBazfzBE2z3uUULFE_o&s" alt="Card Image" />
      </div>

      <div
        className={`ccard${selectedCard === 2 ? ' selected' : ''}`}
        onClick={() => selectImage(2)}
      >
        <img className='card-img' src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="Card Image" />
      </div>

      <div
        className={`ccard${selectedCard === 3 ? ' selected' : ''}`}
        onClick={() => selectImage(3)}
      >
        <img className='card-img' src="https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg" alt="Card Image" />
      </div>

      <div
        className={`ccard${selectedCard === 4 ? ' selected' : ''}`}
        onClick={() => selectImage(4)}
      >
        <img className='card-img' src="https://i.imgur.com/67qVVB7.png" alt="Card Image" />
      </div>

      <div
        className={`ccard${selectedCard === 5 ? ' selected' : ''}`}
        onClick={() => selectImage(5)}
      >
        <img className='card-img' src="https://i.imgur.com/suCBV3K.png" alt="Card Image" />
      </div>
    </main>
  );
};

export default Events;
