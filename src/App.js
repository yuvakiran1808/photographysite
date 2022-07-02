import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Route, Routes,useLocation} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/Aboutus';
import Contact from './pages/Contact';
function App() {
  const location  = useLocation();
  return (
    <div className="App">
      <Nav />
      <Routes location={location} key = {location.pathname} >
      <Route path="/" element = { <Home/>} >
        
      </Route>
      <Route path="/about" element = { <About/>} >
          
      </Route>
      <Route path="/contact" element = { <Contact/>} >
          
      </Route>
     </Routes>
    </div>
  );
}

export default App;
