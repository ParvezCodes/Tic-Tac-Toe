import React from "react";
import PropTypes from 'prop-types';
import { TbTicTac } from 'react-icons/tb';

export default function Navbar() {
  const style1 = {
    fontSize : '20px',
    color : 'white',
    marginRight : '10px'
  }

  return (    
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> 
        <div className="container-fluid">
          <a className="navbar-brand pt-2 mx-2" href="/">
           <b>  <TbTicTac style={{fontSize : '40px'}}/> </b>
          </a>
          <b style={style1}>Tic-Tac-Toe</b>
        </div>
      </nav>
  );
}

Navbar.propTypes = { 
    title : PropTypes.string
}
