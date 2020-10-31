import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/home'
import Country from './components/country'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Content">
      <BrowserRouter>
          <Switch>
            <Route path="/country" component={Country} />
            <Route path="/" component={Home} />
          </Switch>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
