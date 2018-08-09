import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  constructor(props){
    super(props)
  }
  petMaker = () => this.props.pets.map( pet => <Pet key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet}/> ) 
  

  render() {
    console.log(this.props.pets);
    
    return (<div className="ui cards">
      {this.petMaker()} 
    </div>)
  }
}

export default PetBrowser
 