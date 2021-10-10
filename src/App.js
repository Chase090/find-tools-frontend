import React from 'react';

import './App.css';
import { fetchCategory } from './actions/fetchCategory';

import { connect } from 'react-redux'


import Navigation from './components/navigation';



class App extends React.Component {


  componentDidMount(){
    this.props.fetchCategory()
  }

  
  render() {
    
    console.log(this.props.cats)
    return (
      <div className="App">
        <Navigation/>
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