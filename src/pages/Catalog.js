import React, {Component} from 'react'

import Car from '../Components/Car.js'


class Catalog extends React.Component {

  constructor(props) {
    super (props);

    this.state = {
      cars: [],
      editFormOpen: false,

    }

    this.state.cars = this.props.cars;
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
  
  handleEditClick = () => {
    this.openForm();
  }

  openForm = () => {
    this.setState({
      editFormOpen: true,
    })
  };

  handleFormClose = () => {
    this.closeForm();
  };

  closeForm = () => {
    this.setState({
      editFormOpen: false,
    })
  };

  

  render() {
    const timersAPI = this.state.cars.map((car, index) => {
      return(
          <div className='ui centered card' key={index}>
            <Car car={car} type="car" 
            onCartItemAdded={this.handleCartItemAdded}
            onCarItemDeleted={this.handleCarItemDeleted}
            key={car.id}
            id={car.id}
            title={car.title}
            project={car.project}
            imgPath={car.imgPath}
            onFormSubmit={this.props.onFormSubmit}
            />
          </div>
        );
    });

    return (
      <div className="catalog">
        <div className="catalog-side-bar">
        </div>
        <ul className="catalog-list"> {timersAPI} </ul>
      </div>
    );
  }
}



export default Catalog;
