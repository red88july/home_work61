import React from 'react';
import reactLogo from '../../images/ic-react.png';

const Toolbar:React.FC= () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary-subtle ps-5 pe-5 pt-2 pb-2 ">
      <div className="d-flex align-items-center gap-5">
        <div className="p-2">
          <img className="w-75 h-75" src={reactLogo} alt="React Logo" />
        </div>
        <div className="d-flex align-items-center flex-column">
          <span>Home work 61.</span>
          <strong>Programm display information about country</strong>
        </div>
      </div>
    </nav>
  );
};

export default Toolbar;