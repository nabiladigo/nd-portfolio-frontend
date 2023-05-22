import {useRef} from "react";
import Project from "../pages/Projects";
import Contact from "../pages/Contact";
import About from "../pages/About";

const  Home= () => {
  const ref = useRef(null);

  const handleClick=()=>{
    ref.current?.scrollInView({behavior:'smoth'})
  };
    return (
    <div className="text-center">
      <About ref={ref} />
      <Project ref={ref}/>
      <Contact ref={ref}/>
    </div>
    
    )
  }
  
  export default Home;