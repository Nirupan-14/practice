
import './App.css';
import Home from './components/Home';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Contactpage from './components/Contactpage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contactpage/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
