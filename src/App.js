import './App.css';
import Home from './Components/Home';
import Dash from './Components/Dash';
import Form from './Components/Form';
import { Route, Switch, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dash} />
        <Route exact path="/form" component={Form} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
