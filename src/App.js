// import logo from './logo.svg';
import React from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
// import armor from './itemLists/armor.json';
// import weapons from './itemLists/weapons.json';
import './App.css';
// import { nativeTouchData } from 'react-dom/test-utils';

// const armorList = armor.map((armorPiece) => {
//   return armorPiece;
// });

// const weaponsList = weapons.map((weapon) => {
//   return weapon;
// });

// const fullItemList = armorList.concat(weaponsList);

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      items: [],
      searchfield: ''
      }
  }

  componentDidMount() {
    var that = this;
    fetch('https://www.dnd5eapi.co/api/equipment-categories/armor')
    .then(response => response.json())
    .then(function (data) {
      console.log("data", data);
      let equipment = data.equipment;
      that.setState({ items: equipment})
    }).catch(function (error) {
      console.error(error);
    })
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render() {
    const { items } = this.state;
    console.log(items)
    // const filteredItems = this.state.items.filter(item => {
    //   return item.name.toLowerCase().includes(searchfield.toLowerCase())
    // })
    return !items.length ?
      <h1 className='tc f1'>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>Vanamar's</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
              <CardList items={items} />
          </Scroll>
        </div>
      );
  }
}

export default App;
