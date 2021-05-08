import React from 'react'
import ItemCard from './ItemCard'

const CardList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {
        items.map((item) => {
          return <ItemCard
            key={item.index}
            item={item}
          />
        })
      }
    </div>
  );
}

export default CardList