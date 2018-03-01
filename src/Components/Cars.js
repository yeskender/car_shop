import React, {Component} from 'react'

import { BrowserRouter as Hashrouter, Navlink, Route, Switch } from 'react-router-dom'

import Home from '../pages/Home.js'
import Catalog from '../pages/Catalog.js'
import Mycars from '../pages/Mycars.js'
import About from '../pages/About.js'
import Login from '../Components/Login.js'
import EditableCar from '../Components/EditableCar.js'


class Cars extends React.Component {

  constructor(props) {
    super (props);
  }

  handleCartItemAdded = (cart) => {
    this.props.onCartItemAdded(cart);
  }

  handleCartItemDeleted = (id) => {
    this.props.onCartItemDeleted(id);
  }
  handleCarItemDeleted = (id) => {
    this.props.onCarItemDeleted(id);
  }

  render() {

      return(
        <div className="body">
            <Switch>
            <Route exact path='/' render={props => <Home
                feeds={this.props.feeds}/>}/>

            <Route path='/catalog' render={props => 
              <Catalog
                onFormSubmit={this.props.onFormSubmit}
                onCartItemAdded={this.handleCartItemAdded}
                onCartItemDeleted={this.handleCartItemDeleted}
                onCarItemDeleted={this.handleCarItemDeleted}
                onFormSubmit={this.props.onFormSubmit}
                cars={this.props.cars}
                username={this.props.username}
                carts={this.props.carts}/>}
                />
            <Route path='/mycars' render={props => 
              <Mycars
                onCartItemDeleted={this.props.onCartItemDeleted}
                carts={this.props.carts}/>}/>
            <Route path='/about' render={props => 
              <About
                onCartItemDeleted={this.handleCartItemDeleted}
                carts={this.props.carts}/>}/>
            <Route path='/editablecar' render={props => 
              <EditableCar
                onFormSubmit={this.props.onFormSubmit}
                onTrashClick = {this.props.onTrashClick}
                cars={this.props.cars}/>}/>

          </Switch>

        </div>
      );
  }

}

export default Cars;
