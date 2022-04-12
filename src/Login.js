import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./pages/about";
import annual from "./pages/annual";
import Add from "./pages/Add";

function Login1() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Login} />
		<Route exact path="/About" component={About} />
        <Route exact path="/annual" component={annual} />
        <Route exact path="/ADD" component={Add} />
      </BrowserRouter>
    </div>
  );
}

export default Login1;
