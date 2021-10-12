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
import ToolsContainer from './containers/toolsContainer'
import Home from './components/home';





class App extends React.Component {
  
  render() {
    
    return (
      <Router>
        <div className="App">
          <Navigation />
          <div className="Content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route exact path= "/tools">
                <ToolsContainer />
              </Route>

              <Route path="/tools/new">
                {/* tools create form */}
              </Route>

            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App



// second argument calls dispatch on the return value of function(fetchcategory)