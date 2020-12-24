
import Axios from "axios";
import React from "react";
import { Context } from './Context';

export const Store = props => {

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  }

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Context.Provider value={{
      handleClose, handleToggle, open
      }}> 
      {props.children}
    </Context.Provider>
  );
};