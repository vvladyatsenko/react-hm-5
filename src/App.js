import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import { UsersProvider } from './Components/Users/UsersProvider';

function getActiveLinkStyle(isActive) {
  return isActive ? { color: 'green', textDecoration: 'none' } : {};
}

function App() {
  return (
    <Router>
      <UsersProvider>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                end
                style={({ isActive }) => getActiveLinkStyle(isActive)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                style={({ isActive }) => getActiveLinkStyle(isActive)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                style={({ isActive }) => getActiveLinkStyle(isActive)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} end />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </UsersProvider>
    </Router>
  );
}

export default App;
