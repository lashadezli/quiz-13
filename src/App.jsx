import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Person } from './pages/Person';


function App() {
  return (
    <>
      <Router>
        <Routes>
           <Route path='/' element={<Home />} />    
           <Route path='/about' element={<About />} />    
           <Route path='/person' element={<Person />} />          
        </Routes>
      </Router>
    </>
  );
}

export default App;
