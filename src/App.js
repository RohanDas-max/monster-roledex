import './App.css';
import { Component } from 'react';
import CardList from './comp/car-list/CardList';
import { Searchbox } from './comp/Search/Searchbox';


class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ""
      };
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(res => res.json())
      .then(users => this.setState( {monsters: users}));;
  }


render () {
  const { monsters, searchField } = this.state;
  const filteredMonsters = monsters.filter(monster => 
    monster.name.toLowerCase().includes(searchField.toLowerCase()))
  return (
    <div className='App'>
    <h1>Monster Roller</h1>
    <Searchbox 
    placeholder="🔎 monsters"
    handleChange={e => {
      this.setState({ searchField: e.target.value})
    }}
    />


   <CardList monsters={filteredMonsters}/>
    </div>
  );
};
}

export default App;