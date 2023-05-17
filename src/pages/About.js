import {useState, useEffect} from "react";

function About(props){
  const[about, setAbout] = useState(null);
  const getAboutData = async() =>{
    const response = await fetch(props.URL + "about");
    const data = await response.json();
    setAbout(data);
  };
  useEffect(()=>getAboutData(),[]);
  const loaded= ()=>(
    <div>
      <img src={about.headshot} alt= {about.name} />
      <div>
        {about.bio}
        <div>
          <p>
          Here are few technologies I've been working with: {about.skills}...
          </p>
        </div>
      </div>
    </div>
  );
  return about ? loaded(): <h1>Loading...</h1>;
};

export default About;