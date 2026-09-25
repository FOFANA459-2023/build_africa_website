import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import NotFound from './pages/NotFound';

const App = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="programs" element={<Programs />} />
      <Route path="gallery" element={<Gallery />} />
      {/* Keep the old misspelled URL working for anyone who shared it. */}
      <Route path="gallary" element={<Navigate to="/gallery" replace />} />
      <Route path="contact" element={<Contact />} />
      <Route path="donate" element={<Donate />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default App;
