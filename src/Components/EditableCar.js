import React from 'react';
import helpers from './helpers';
import { Dropdown } from 'semantic-ui-react'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'

class EditableCar extends React.Component {

  render() {
    const cars = this.props.cars.map((car) => (
      <Editable
        key={car.id}
        id={car.id}
        title={car.title}
        project={car.project}
        imgPath={car.imgPath}
        onFormSubmit={this.props.onFormSubmit}
        onTrashClick = {this.props.onTrashClick}
      />
    ));

    return (
      <div id='cars'>
        {cars}
      </div>
    );
  }
}
class Editable extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      editFormOpen: false,
    };
  }

  handleSubmit = (timer) => {
    this.props.onFormSubmit(timer);
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
    if (this.state.editFormOpen) {
      return (
        <TimerForm
          id={this.props.id}
          title={this.props.title}
          project={this.props.project}
          onFormSubmit={this.handleSubmit}
          onFormClose={this.handleFormClose}
          imgPath={this.props.imgPath}
        />
      );
    } else {
      return (
        <Timer
          id={this.props.id}
          title={this.props.title}
          project={this.props.project}
          onStartClick={this.props.onStartClick}
          onEditClick={this.handleEditClick}
          onTrashClick = {this.props.onTrashClick}
          imgPath={this.props.imgPath}
          onAddToShoppingList={this.props.onAddToShoppingList}
          shoppingList={this.props.shoppingList}
        />
      );
    }
  }
}

//a

class TimerForm extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      title: this.props.title || '',
      project: this.props.project || '',
      imgPath: this.props.imgPath || '',
    }
  }

  handleTitleChange = (e) => {
    this.setState({
      title: e.target.value
    });
  };

  handleProjectChange = (e) => {
    this.setState({
      project: e.target.value
    });
  };
  
  handleImageChange = (e) => {
    this.setState({
      imgPath: e.target.value
    });
  };

  handleSubmit = () => {
    this.props.onFormSubmit({
      id: this.props.id,
      title: this.state.title,
      project: this.state.project,
      imgPath: this.state.imgPath
    });
  };
  
  
  render() {

    const options = ["EUR", "RUB"]
    
    const submitText = this.props.id ? 'Update' : 'Create';
    return (
      <div className='ui centered card'>
        <div className='content'>
          <div className='ui form'>
            <div className='field'>
              <label>Type of Car</label>
              <input 
                type='text' 
                value={this.state.title} 
                onChange={this.handleTitleChange}
              />
            </div>
            <div className='field'>
              <label>Cost</label>
              <input 
                type='text' 
                value={this.state.project}
                onChange={this.handleProjectChange}
              />
            </div>
            <div className='field'>
              <label>Image link</label>
              <input 
                type='text' 
                value={this.state.imgPath}
                onChange={this.handleImageChange}
              />
            </div>
            <div className='ui two bottom attached buttons'>
              <button 
                className='ui basic blue button'
                onClick={this.handleSubmit}
              >
                {submitText}
              </button>
              <button 
                className='ui basic red button'
                onClick={this.props.onFormClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


class ToggleableTimerForm extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      isOpen: false,
    }
    // this.handleFormOpen = this.handleFormOpen.bind(this);
  }

  handleFormOpen = () => {
    this.setState({
      isOpen: true
    });
  };

  handleFormClose = () => {
    this.setState({
      isOpen: false,
    });
  };

  handleFormSubmit = (timer) => {
    this.props.onFormSubmit(timer);
    this.setState({ isOpen: false });
  };


  render() {
    if (this.state.isOpen) {
      return (
        <TimerForm
          onFormSubmit={this.handleFormSubmit}
          onFormClose={this.handleFormClose}
        />
      );
      //a
    } else {
      return (
        <div className='ui basic content center aligned segment'>
          <button 
            className='ui basic button icon'
            onClick={this.handleFormOpen}
          >
            <i className='plus icon' />
          </button>
        </div>
      );
    }
  }
}

//a
class Timer extends React.Component {

  componentDidMount() {
    this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50);
  }

  componentWillUnmount() {
    clearInterval(this.forceUpdateInterval);
  }

  startClick = () => {
    this.props.onStartClick(this.props.id);
  };

  TrashClick = () => {
    this.props.onTrashClick(this.props.id);
  };

  render() {
  const elapsedString = helpers.renderElapsedString(this.props.elapsed, this.props.runningSince);
  
  return (
    
    <div className='ui centered card'>
        <div className='content'>
          <div className='header'>{this.props.title}</div>
          <div className='meta'>{this.props.project}</div>
          <div className='center aligned description'>
            <img className="ui medium image" src={this.props.imgPath} alt=''/>
          </div>

          <div className='extra content'>
            <span className='right floated edit icon' onClick={this.props.onEditClick}>
              <i className='edit icon' />
            </span>
            <span className='right floated trash icon' onClick={this.TrashClick}>
              <i className='trash icon' />
            </span>
          </div>
          
        </div> 
        <button className='ui bottom attached blue basic button' onClick={this.startClick}>
            {this.props.runningSince ? "Remove" : "Add"}
          </button>
      </div>
  );
  }
}
export default EditableCar;