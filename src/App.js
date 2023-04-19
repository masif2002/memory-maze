import React, { useState } from 'react';
import shuffle from './utils/shuffle';
import Card from './components/Card'

function App() {
  const [cards, setCards] = useState(shuffle)

  return (
      <div className='grid'>
        {cards.map((card) =>
           <Card
              key={card.id}
              image={card.image}
              selected={false}
           />
        )}
      </div>
  );
}

export default App;
