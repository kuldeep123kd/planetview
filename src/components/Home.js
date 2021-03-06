import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import { Context } from '../shared/store/Context';
import './Home.scss';
import { Checkbox, CircularProgress } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const Home = () => {

  const {handleToggle, open, getAllPlanets, setFavPlanet, isPlanet, setIsPlanet, isLoading, isError} = React.useContext(Context);
  const [planets, setPlanets] = React.useState([]);

  const handleChange = (event) => {
    planets.forEach((data) => {
      if (data.id === event.target.value) {
        setFavPlanet(event.target.value, event.target.checked);
        setTimeout(() => {
          setIsPlanet(false);
        }, 3000);
      }
    });
  };

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
              <h1 style={{fontSize: "1rem", margin: 0}}>All Planets</h1>
            </div>
          </nav>
          <div className="homepage__maincontent__planets">
            {
              isError && <Alert severity="error">Something went wrong, please check your internet connection and reload the page.</Alert>
            }
            {
              isPlanet && <Alert severity="success">Set favourite success.</Alert>
            }
            <div> 
              <div className="homepage__maincontent__planets__table__parent">
              
                <h1>Planets List</h1>
                <div className="homepage__maincontent__planets__table">
                  <table>
                    <tbody>
                      <tr>
                        <th>Planet Name</th>
                        <th>Mark Favourite</th>
                      </tr>
                      {
                        (!isLoading) ? (
                          planets.map((data) => {
                            return(
                              <tr key={data.id}>
                                <td>{data.name}</td>
                                <td>
                                  <Checkbox
                                    color="primary"
                                    checked={data.isFavourite}
                                    value={data.id}
                                    onChange={handleChange}
                                  />
                                </td>
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

export default Home;