import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from './Component/Home';
import About from './Component/About';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Content from './Component/Content';
import Contentall from './Component/Contentall';

import Cform from './Component/Cform';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        
        
       
         <Route exact path="/" element={<Home/>}></Route>
         <Route exact path="/About" element={<About/>}></Route>
         <Route exact path="/Header" element={<Header/>}></Route>
         <Route exact path="/Footer" element={<Footer/>}></Route>
         <Route exact path="/Content" element={<Content />}></Route>
         <Route exact path="/Contentall" element={<Contentall />}></Route>
         <Route exact path="/Cform" element={<Cform />}></Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
