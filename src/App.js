import Home from './Components/Home';
import Dash from './Components/Dash';
import Form from './Components/Form';
import Graph from './Components/Graph';
import React, {useContext} from "react"
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import { AuthProvider, AuthContext } from './Auth';


const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const {currentUser} = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={routeProps =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/"} />
        )
      }
    />
  );
};


function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute exact path="/dashboard" component={Dash} />
        <PrivateRoute exact path="/form" component={Form} />
        <PrivateRoute exact path="/graph" component={Graph} />

      </Switch>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
