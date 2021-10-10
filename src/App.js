import React from 'react';

import './App.css';
import { fetchCategory } from './actions/CategoryActions';

import { connect } from 'react-redux'


import Navigation from './components/navigation';
import Home from './components/home';
import ToolsContainer from './containers/ToolsContainer';



class App extends React.Component {




  
  render() {
    
    // console.log(this.props.cats)
    return (
      <div className="App">
        <Navigation/>
        <Home/>
        <ToolsContainer/>
        <ul>
          <li>asdf</li>
        </ul>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
 return{
   cats: state.cats
 }
}


export default connect(mapStateToProps, {fetchCategory})(App);

// second argument calls dispatch on the return value of function(fetchcategory)