import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [currentMenu, setCurrentMenu] = React.useState("/");

  const menus = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ];

  const handleMClick = (path) => {
    setCurrentMenu(path);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Locatimi</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {menus.map((menu) => (
              <li 
                key={menu.path} 
                className="nav-item" 
                style={{ fontWeight: currentMenu === menu.path ? 'bold' : 'normal' }}
              >
                <Link 
                  className={`nav-link ${currentMenu === menu.path ? 'active' : ''}`} 
                  to={menu.path} 
                  onClick={() => handleMClick(menu.path)}
                >
                  {menu.name} {/* Correctly render menu name */}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
