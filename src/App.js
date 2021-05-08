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
    this.armor = [];
    this.weapons = [];
  }

  async componentDidMount() {
    this.armor = await this.getEquipment('armor');
    // this.weapons = await this.getEquipment('weapon');
    this.setState({ items: this.armor.concat(this.weapons) })
  }

  async getEquipment(catURL) {
    let equipment = [];
    try {
      let response = await fetch('https://www.dnd5eapi.co/api/equipment-categories/' + catURL);
      if (response.ok) {
        let responseJSON = await response.json();
        let equipArray = responseJSON.equipment;
        for (var i = 0; i < equipArray.length; i++) {
          let item = await (await fetch('https://www.dnd5eapi.co' + equipArray[i].url)).json();
          if (!item.url.includes('magic-items')) {
            equipment.push(item);
          }
        }
        // console.log(equipment);
      } else {
        throw new Error("category response.ok is false")
      }
    } catch (ex) {
      console.error(ex);
    }
    return equipment;
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render() {
    const { items } = this.state;
    // console.log(items)
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
