import { Route, Routes } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import About from './routes/About';
import Contact from './routes/Contact';
import Events from './routes/Events';
import Home from './routes/Home';
import Members from './routes/Members';
import Gallery from './components/Gallery';

function App() {
  return (
    <Analytics>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/events" exact element={<Events />} />
          <Route path="/members" exact element={<Members />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/gallery" exact element={<Gallery />} />
        </Routes>
      </div>
    </Analytics>
  );
}

export default App;
