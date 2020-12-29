import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useStateValue } from './store/stateProvider';
import { Header } from './components/Header/Header'
import { Home } from './components/Home/Home'
import { Recipes } from './components/Recipes/Recipes';


import './App.css';


function App() {
  const [state, dispatch] = useStateValue();
  console.log(state);
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/recipes" component={Recipes} />
          <Route exact path="/about-us" component={Home} />
          <Route exact path="/team" component={Home} />
          <Route exact path="/cultural" component={Home} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
