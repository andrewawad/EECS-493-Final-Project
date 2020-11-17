import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Dash from './Components/Dash';
import Form from './Components/Form';
import { Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard" component={Dash} />
      <Route exact path="/form" component={Form} />
    </div>
  );
}

export default App;
