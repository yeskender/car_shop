import React, {Component} from 'react'
import {
    Button,
    Menu,
    Container,
    Segment,
    Visibility,
    Icon
} from 'semantic-ui-react'

class Car extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editFormOpen: false,
    };
  }

  handleClick = () => {
    if (this.props.type == "car"){
      this.props.onCartItemAdded (this.props.car);
    }
    else
      this.props.onCartItemDeleted(this.props.car.id);
  }

  handleSubmit = (car) => {
    this.props.onFormSubmit(car);
    this.closeForm();
  };


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
    if (this.props.type == "cart") {
        return(
          <div>
            <div>
              <div>
                <div className='header'>{this.props.car.title}</div>
                <div className='meta'> Cost: {this.props.car.project}</div>
                <div className='center aligned description'>
                  <img className="ui medium rounded image" src={this.props.car.imgPath} alt=''/>
                </div>
                <div className='extra content'>
                  <span className='right floated edit icon' onClick={this.props.onEditClick}>
                    <i className='edit icon' />
                  </span>
                  <span className='right floated trash icon' onClick={this.props.onCarItemDeleted}>
                    <i className='trash icon' />
                  </span>
                </div>
              </div>
              </div>
              <Button className='ui bottom attached blue basic button' onClick={this.handleClick}>Remove</Button>
          </div>
        );
    }

    else {
        return(
          <div>
              <div>
                <div className='header'>{this.props.car.title}</div>
                <div className='meta'> Cost: {this.props.car.project}</div>
                <div className='center aligned description'>
                  <img className="ui medium rounded image" src={this.props.car.imgPath} alt=''/>
                </div>
                <div className='extra content'>
                  <span className='right floated edit icon' onClick={this.props.onEditClick}>
                    <i className='edit icon' />
                  </span>
                  <span className='right floated trash icon' onClick={this.props.onCarItemDeleted}>
                    <i className='trash icon' />
                  </span>
                </div>
              </div>
              <button className='ui bottom attached blue basic button' onClick={this.handleClick}>Add</button>
          </div>


        );
    }
  }
}

export default Car;
