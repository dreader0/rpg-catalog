import React from 'react';
import './css/Card.css'

const Card = ({ item }) => {
  // console.log(item)
  if (item !== {}) {
    return (
      <div className='tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shawdow-5'>
        { item.equipment_category.index === "armor" ?
          < div >
            <h3>{item.name}</h3>
            <p>{item.armor_category} </p>
            <p>AC: {item.armor_class.base} {item.armor_class.dex_bonus ? '+DEX' + (item.armor_class.max_bonus ? ' (+' + item.armor_class.max_bonus + 'max)' : '') : ''}</p>
            <p>{item.cost.quantity}{item.cost.unit} </p>
            <p>{item.weight}lb. </p>
            <p>{item.stealth_disadvantage ? '-STEALTH' : ''}</p>
            <p>{item.str_minimum ? 'STR > ' + item.str_minimum : ''} </p>
          </div>
          :
          < div >
            <h3>{item.name}</h3>
            <p>{item.category_range}</p>
            <p>{item.range.normal}ft.{item.range.long ? ' / ' + item.range.long + 'ft.' : ''}</p>
            {item.damage ? <p>{item.damage.damage_dice + ' ' + item.damage.damage_type.name}</p> : ''}
            <p>{item.cost.quantity}{item.cost.unit}</p>
            <p>{item.weight}lb. </p>
            <p>{item.properties.map((prop) => {
              return prop.name
            }).join(', ')}</p>
          </div>
        }
      </div >
    )
  } else {
    return (<div></div>);
  }

}

export default Card;