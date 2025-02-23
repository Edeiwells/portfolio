import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.scss'; 
import './cursor.scss'; 
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './pages/home/home';
import About from './pages/about/about';
import Works from './pages/works/works';
import Contact from './pages/contact/contact';
import Services from './pages/services/services'; 
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;