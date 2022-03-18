import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import RouteConfig from './route'
import './App.css'

import Home from './pages/Home';
import AboutPage from './pages/About'
import NoMatch from './pages/NoMatch';
import Navbar from './components/Navbar';



const {HOME, ABOUT} = RouteConfig;
const {ABOUT_APP, ABOUT_AUTHOR} = ABOUT.subroutes

const HomeRoute = [HOME, ABOUT];
const AboutRoute = [HOME, ABOUT_APP, ABOUT_AUTHOR]

const [About,AboutApp,AboutAuthor] = AboutPage;


const App = ()=> {

  const [navRoute,changeRoute] = useState(HomeRoute)
  const [show,setShow] = useState(false) 

  const location = useLocation();
  const {pathname} = location

  useEffect(()=>{
    const currentPath  = pathname
    if(currentPath === '/') changeRoute(HomeRoute)
    else if(currentPath.includes('about')) changeRoute(AboutRoute)
  },[pathname])

  const handleToggleNavClick = ()=> setShow(!show)

  return (
    <div className='App'>

      <header>
        {
          show ? 
          <Navbar routeList={navRoute} closeClick={handleToggleNavClick}/> 
          :
          <button className="btn-toggle-nav" onClick={handleToggleNavClick}>
            <span className="material-icons-round icon">menu</span>
          </button>
        }
      </header>

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home route={HomeRoute}/>}/>
          <Route path="about" element={<About route={AboutRoute}/>}>
            <Route index element={<Navigate replace to="about-app"/>}/>
            <Route path="about-app" element={<AboutApp/>}/>
            <Route path="about-author" element={<AboutAuthor/>}/>
          </Route>
          <Route path="*" element={<NoMatch/>}/>
        </Routes>
      </div>

    </div>
  );
}

export default App;