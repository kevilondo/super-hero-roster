import logo from '../logo.png';

function Header() {
    
  
    return (
        <header className="App-header">
          <nav>
            <img src={logo} className="navbar-brand" width="120px" height="120px"/>
            <span className="text-logo navbar-brand">Super Hero Roster</span>
          </nav>
        </header>

    );
  }
  
  export default Header;