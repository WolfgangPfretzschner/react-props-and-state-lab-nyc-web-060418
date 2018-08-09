import React from 'react'
import getAll from '../data/pets'
import getByType from '../data/pets'
import getBetweenAge from '../data/pets'
import Filters from './Filters'
import PetBrowser from './PetBrowser'
import Pet from './Pet'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }
  //gets triggered in Filter component inside the selector form
  onFindPetsClick = () => {
    let url = ""
    console.log(this.state.filters.type, "before switch");
    switch(this.state.filters.type){
      case "all":
        url = "/api/pets"
      break;
      case "cat":
        url = "/api/pets?type=cat"
      break;
      case "dog":
        url = "/api/pets?type=dog"
      break;
      case "micropig":
        url = "/api/pets?type=micropig"
      break;
      default: url = "/api/pets"
      }
      console.log(url,"after switch");
      
    fetch(url).then(res => res.json()).then(data => this.setState({pets:data}));    
  }
  //callback from pets to change the adopted state
  onAdoptPet = (id) => {
    let newPets = this.state.pets.map(pet => pet.id ===id ? {...pet, isAdopted: true} : pet )
    this.setState({pets:newPets})
  }
  //gets triggered in Filters component onClick the form button
  onChangeType = (input) =>{
    this.setState({filters:{type:input}})
  }

  render() {

    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
 