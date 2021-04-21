import React from 'react'
import Card from './Card'

const CardList = ({ items }) => {
  var promiseArr = items.map((item, i) => {
    return <Card
      key={i}
      item={items[i]}
    />
  });
  var cards = Promise.all(promiseArr);
  return (
    <div>
      {cards}
    </div>
  );
}

export default CardList