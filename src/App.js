import React from 'react';
import Signin from './Signin/Signin';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './Home/Home';
import {ListProvider} from './Context/Context'
import Asia from './Home/Asia';
import Europe from './Home/Europe';
import Header from './Home/Header';


function App() {
  return (
    
      <Router>
        <Header />
        <Switch>
        <ListProvider>
      <Route exact path='/' component={Signin} />
      <Route path='/Home' component ={Home} />
      <Route path="/Asia" component={Asia}/>
      <Route path="/Europe" component={Europe}/>
      
      </ListProvider>

      </Switch>
      </Router>
    
  );
}

export default App;
