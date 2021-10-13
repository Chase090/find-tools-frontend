import React from 'react';
import './App.css';
// --------------
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// --------------
import Navigation from './components/navigation';
import Home from './components/homeComponents/home';
import ToolsForm from './components/toolsComponents.js/toolForm';
import {Layout} from './components/appLayout';
import {Toolindex} from './components/toolsComponents.js/toolIndex';
import { About } from './components/aboutComponents/about';
import RentedTools from './containers/rentedTools';




class App extends React.Component {
  
  render() {
    
    return (
      <div className="App">
        <Layout>
          <Router>
            <Navigation />
            <div className="Content">
              <Switch>
                <Route exact path="/">
                 <Home />
                </Route>

                <Route exact path= "/tools">
                 <Toolindex />
                
                </Route>

                <Route path="/tools/new">
                  <ToolsForm />
                </Route>

                <Route path="/about">
                  <About />
                </Route>
                
                <Route path="/rented">
                 <RentedTools/>
                </Route>

              </Switch>
            </div>
          </Router>
        </Layout>
      </div>
    )
  }
}

export default App



// second argument calls dispatch on the return value of function(fetchcategory)