import React from 'react'
import Card from './Card'

const CardList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {
        items.map((item) => {
          return <Card
            key={item.index}
            item={item}
          />
        })
      }
    </div>
  );
}

export default CardList