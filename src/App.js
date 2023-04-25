import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

import './App.css';
import Navbar from './Navigation/Navbar';
import Footer from './Navigation/Footer';
import Home from './Pages/Home';

function App() {
  return (
    <>
  <Navbar />  

 <Home/>
 <Footer/> 
    </>
  )
}

export default App;
