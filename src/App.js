import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Header from './components/HeaderComponent'
import Landing from './components/LandingComponent'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router >
        <Header />
        <Switch>
          <Route exact path="/" component={Landing}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
