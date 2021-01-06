import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "appSrc/page/pageHome";
import AboutUs from "appSrc/page/aboutUs";
import Business from "appSrc/page/business";
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
      <Route path="/aboutus" exact component={AboutUs}></Route>
      <Route path="/business" exact component={Business}></Route>
    </Router>
  );
}

export default App;
