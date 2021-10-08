import React from 'react';

import './App.css';


class App extends React.Component {



  componentDidMount() {
    fetch('http://localhost:3001/categories')
    .then(resp => resp.json())
    .then(data => console.log(data)) 
  }


  render() {
    return (
      <div className="App">
        
      </div>
    )
  }

}

export default App;
