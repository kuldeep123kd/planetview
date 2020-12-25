
import Axios from "axios";
import React from "react";
import { Context } from './Context';

export const Store = props => {

  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isPlanet, setIsPlanet] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  }

  const handleToggle = () => {
    setOpen(!open);
  };

  const getAllPlanets = () => {
    Axios.get('https://assignment-machstatz.herokuapp.com/planet')
    .then(res => {
      if(res?.status === 200) {
        setIsLoading(false);
        if(!localStorage.getItem("planetdata")) {
          localStorage.setItem('planetdata', JSON.stringify(res.data));
        }
      }
    })
    .catch(err => {
      if(err.response?.status === 400 || err.response?.status === 401) {
        setIsLoading(false);
        setIsError(true);
      }
    })
  }

  const setFavPlanet = (id, isfav) => {
    var planetdata = JSON.parse(localStorage.planetdata);
    for (var i = 0; i < planetdata.length; i++) {
      if(id === planetdata[i].id){
        planetdata[i].isFavourite = isfav;
        break;
      }
    }
    localStorage.setItem("planetdata", JSON.stringify(planetdata));
    setIsPlanet(true);
  }

  return (
    <Context.Provider value={{
      handleClose, handleToggle, open,
      getAllPlanets, setFavPlanet, isPlanet, 
      setIsPlanet, isLoading, isError
      }}> 
      {props.children}
    </Context.Provider>
  );
};