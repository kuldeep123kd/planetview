import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import { Context } from '../shared/store/Context';
import './Home.scss';
import { CircularProgress } from '@material-ui/core';

const Favourite = () => {

  const {handleToggle, open, getAllPlanets, isLoading} = React.useContext(Context);
  const [planets, setPlanets] = React.useState([]);


  React.useEffect(() => {
    getAllPlanets();
    if(localStorage.getItem("planetdata")) {
      setPlanets(JSON.parse(localStorage.planetdata));
    }
  },[getAllPlanets]);

  return (
    <>
      <div className="homepage">
        <Sidebar />
        <div className="homepage__maincontent">
          <nav className="navbar navbar-dark bg-primary header__padding header__position">
            <div className={`navbar-toggler header__navbar__menu--btn ${open ? "open" : "" } `} onClick={handleToggle} >
              <div className="header__navbar__menu--btn__icon"></div>
            </div>
            <div className="homepage__maincontent__title ml-auto">
              <h1 style={{fontSize: "1rem", margin: 0}}>Favourites</h1>
            </div>
          </nav>
          <div className="homepage__maincontent__planets">
            <div> 
              <div className="homepage__maincontent__planets__table__parent">
              
                <h1>Favourite Planets</h1>
                <div className="homepage__maincontent__planets__table">
                  <table>
                    <tbody>
                      <tr>
                        <th>Planet Name</th>
                      </tr>
                      {
                        (!isLoading) ? (
                          planets.filter(dat => dat.isFavourite === true).map((data) => {
                              return(
                                <tr key={data.id}>
                                  <td>{data.name}</td>
                                </tr>
                              );
                          })
                        )
                        : 
                        (
                          <div className="progress__loader">
                            <CircularProgress />
                          </div>
                        )
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Favourite;