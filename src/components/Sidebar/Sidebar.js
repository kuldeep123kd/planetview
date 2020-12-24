import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Context } from '../../shared/store/Context';

const Sidebar = () => {

  const {handleClose, open} = React.useContext(Context);

  const location = useLocation();


  const hideSidebar = () => {
    setTimeout(() => {
      handleClose();
    }, 50);
  }

    return ( 
      <>
        <div onClick={handleClose} style={{display: open ? "block" : "none"}} className="homepage__sidebar__overlay"></div>
        <div className={`homepage__sidebar ${open ? "homepage__sidebar__active" : "homepage__sidebar__inactive"}`}>
          <div className="homepage__sidebar__logo d-flex align-items-center justify-content-between">
            <Link to="/" >Planets</Link>
            <div className="sidebar__close">
              <span onClick={handleClose}>X</span>
            </div>
          </div>
          <div className="homepage__sidebar__content">
            <div>
              <h1>Employee</h1>
              <ul>
                <li onClick={hideSidebar} className={(location.pathname === '/addusers' ? 'active' : '')}><Link to="/addusers">Add User</Link></li>
                <li onClick={hideSidebar} className={(location.pathname === '/listusers' ? 'active' : '')}><Link to="/listusers">List All users</Link></li>
                <li onClick={hideSidebar} className={(location.pathname === '/deleteusers' ? 'active' : '')}><Link to="/deleteusers">Delete user</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );

}

export default Sidebar;
