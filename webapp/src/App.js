import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "appSrc/page/pageHome";
import './App.css';

function App() {
  return (
    <Router>
      <Route
        path="/"
        exact
        render={() => <Redirect to="/home" push />}
      ></Route>
      <Route path="/home" exact component={Home}></Route>
    </Router>
  );
}

export default App;
