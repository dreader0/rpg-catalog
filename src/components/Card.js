import React from 'react';

const Card = ({ item }) => {
  console.log("item.index: ", item.index);
  if (item !== {}) {
    return new Promise((resolve, reject) => {
      fetch("https://www.dnd5eapi.co" + item.url)
      .then(response => response.json())
      .then(function(itemObj) {
        console.log("itemObj:", itemObj);
        resolve (
          <div className='tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shawdow-5'>
            {/* <img alt={item.name} src={item.image} width={150}/> */}
              {
                <div> 
                  <h3>{itemObj.name}</h3>
                  </div>
                }
              
          </div>
        );
      }).catch(function (error) {
        console.error(error);
        reject (<div></div>);
      });
    })
  } else {
    return (<div></div>);
  }
  
}

export default Card;