import logo from './logo.svg';
import './App.css';
import Navbar from './componets/Navbar';
import Footer from './componets/Footer';
import Home from './componets/pages/Home';
import About from './componets/pages/About';
import Programs from './componets/pages/Programs';
import Gallary from './componets/pages/Gallary';
import Contact from './componets/pages/Contact';
import Donate from './componets/pages/Donate';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
  
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Routes>
        <Route path='/about' element={<About />} />
      </Routes>
      <Routes>
        <Route path='/programs' element={<Programs />} />
      </Routes>
      <Routes>
        <Route path='/gallary' element={<Gallary />} />
      </Routes>
      <Routes>
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Routes>
        <Route path='/donate' element={<Donate />} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
