import React from 'react';
import kombuchaPic from './../img/kombucha.jpg'

function Header() {
  return (
    <React.Fragment>
      <img src={kombuchaPic} alt="Kombucha" width="150"></img> 
      <h1>Scoby Doo's 'Booch Bar</h1>
    </React.Fragment>
  );
}

export default Header;