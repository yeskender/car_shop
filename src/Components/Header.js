import React, {Component} from 'react'


import Menu from './Menu.js'


class Header extends React.Component {

  render() {
    return (
      <div className="header">
        <div className="menu">  
        <Menu 
          username = {this.props.username}
        /> </div>
      </div>
    );
  }

}

export default Header;
