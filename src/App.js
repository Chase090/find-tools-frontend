import React from 'react';

import './App.css';
import { fetchCategory } from './actions/fetchCategory';

import { connect } from 'react-redux'


class App extends React.Component {


  componentDidMount(){
    this.props.fetchCategory()
  }

  
  render() {
    const cat = this.props.cats.map(cate => cate.name)
    console.log(this.props.cats)
    return (
      <div className="App">
        <ul>
          <li>asdf{cat}</li>
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