import React from "react";

const Contact = (props) =>{
  return(
    <div className="contact">
      {/* <h3 className="">
        Get in Touch
      </h3> */}
      <div className="">
        <p className="">
          I like to hear from you
        </p>
        <a href="mailto:nabiladigo91@gmail.com"className="email hover:shadow font-bold py-3 px-8 text-xl rounded text-center">
        Get in Touch 👋
        </a>
      </div>
    </div>
  );
}
  export default Contact;