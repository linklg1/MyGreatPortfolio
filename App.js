import './src/App.css';
import Home from "./src/components/Home"
import Contact from "./src/components/Contact"
import Footer from "./src/components/Footer"
import Header from "./src/components/Header"
import Portfolio from "./src/components/Portfolio"
import Resume from "./src/components/Resume"
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
<Route path="/Resume" element={<Resume/>}/>
<Route path="/" element={<Home/>}/>



      </Routes>
      
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
