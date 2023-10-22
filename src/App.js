import Navbar from './Navbar';
// import YearBox from './YearBox';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Statistics from './Statistics';
import Home from './Home';
import About from './About';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/statistics">
              <Statistics />
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
