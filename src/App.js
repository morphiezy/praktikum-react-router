import { Routes, Route } from 'react-router-dom';
import './App.css'

import Home from './pages/Home';
import About from './pages/About'
import NoMatch from './pages/NoMatch';



const App = ()=> {
  return (
    <div className='App'>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about/*" element={<About/>}/>
          <Route path="*" element={<NoMatch/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;