import Home from './Home';
import StepOne from './StepOne';
import Header from './Header';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    
    <Router>
      <Header />
      <div className="App">
        <div className="Content">
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route exact path="/stepone">
                <StepOne/>
              </Route>
            </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
