import Gallery from './routes/gallery/gallery';
import Login from './routes/login/login';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
  <Router>
    <div className="App">
      <nav>
        <ul>
          {/* <li>
            <Link to="/">Home</Link>
          </li> */}
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          {/* <li>
            <Link to="/users">Users</Link>
          </li> */}
        </ul>
      </nav>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/gallery">
          <Gallery></Gallery>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        {/* <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route> */}
      </Switch>
    </div>
  </Router>
  );
}

export default App;
