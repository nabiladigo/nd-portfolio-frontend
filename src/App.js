import "./App.css";
import {Route, Routes} from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";
import  Home from "./pages/Home";
import  About from "./pages/About";
import  Projects from "./pages/Projects";


const App =() =>{
  const URL = "https://digou-portfolio.herokuapp.com/";
  return(
    <div className="App">
      <Header/>
      <Routes>
             <Route exact path='/' element ={<Home  URL={URL} />} />
            <Route path='/projects' element = {<Projects  URL={URL} />} />
            <Route path='/about' element = {<About  URL={URL} /> } />
            {/* <Route path='/contact' element= {<Contact URL={URL} />} />    */}
            {/* <Route path='/resume' element= {<Resume URL={URL} />} />    */}
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;