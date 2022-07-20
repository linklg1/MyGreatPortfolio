import logo from './logo.svg';
import './App.css';
import Home from "./components/Home"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Portfolio from "./components/Portfolio"
import {BrowserRouter, Routes, Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
<Route path="/Home" element={<Home/>}/>
<Route path="/Contact" element={<Contact/>}/>
<Route path="/Portfolio" element={<Portfolio/>}/>
<Route path="/" element={<Home/>}/>



      </Routes>
      
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
