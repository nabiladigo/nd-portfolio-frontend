const  Header = (props) => {
  
    return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            <img className="rounded-circle align-middle mr-2 " src="" alt="ND"/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item  " aria-current="page">
                <a className="nav-link " href="/projects">My Work</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='https://docs.google.com/document/d/1_GA1E4VOXxVk1QKdjY5BP3_uWV0lvLBOCfoTxEh146I'>Resume</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
     </header>    
    )
  }
  
  export default Header;



  