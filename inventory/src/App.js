import Home from './Home';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
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
              <Route exact path="/" component={Home}/>
              <Route exact path="/stepone" component={StepOne} />
              <Route exact path="/steptwo" component={StepTwo} />
              <Route exact path="/stepthree" component={StepThree} />


            </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
