import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import { Context } from '../shared/store/Context';
import './Home.scss';

const Home = () => {

  const {handleToggle, open} = React.useContext(Context);

  return (
    <>
      <div className="homepage">
        <Sidebar />
        <div className="homepage__maincontent">
          <nav className="navbar navbar-dark bg-primary header__padding header__position">
            <div className={`navbar-toggler header__navbar__menu--btn ${open ? "open" : "" } `} onClick={handleToggle} >
              <div className="header__navbar__menu--btn__icon"></div>
            </div>
            <div className="ml-auto">
              <h1 style={{fontSize: "1rem", margin: 0}}>Hello World!!</h1>
            </div>
          </nav>
          <div className="homepage__maincontent__addemployees">
            <div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;