import React from 'react';
import helpers from './helpers';

class UsersDashboard extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      users: [
        {
          name: "Test name 1",password: "Test password 1", 
          id: helpers.guid(),
        }
      ],
    };

  }


  handleCreateFormSubmit = (user) => {
    this.createUser(user);
  };


  createUser = (user) => {
    const t = helpers.newUser(user);
    this.setState({
      users: this.state.users.concat(t),
    });
  };

  handleEditFormSubmit = (user) => {
    this.updateUser(user)
  };


  updateUser = (newUser) => {
  
    const newArr = this.state.users.map((user) => {
      if (user.id === newUser.id) {
        return Object.assign({}, user, {
          name: newUser.name,
          password: newUser.password,
        });
      } else {
        return user;
      }
    });
    
    this.setState({
      users: newArr,
    });    
  };
  render() {
    return (
      <div className='ui three column centered grid'>
        <div className='column'>
          <ToggleableLoginForm 
            onFormSubmit={this.handleCreateFormSubmit} 
          />
            
        </div>
      </div>
    );
  }
}

class ToggleableLoginForm extends React.Component {

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

  handleFormSubmit = (user) => {
    this.props.onFormSubmit(user);
    this.setState({ isOpen: false });
  };


  render() {
    if (this.state.isOpen) {
      return (
        <LoginForm
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

class LoginForm extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      user: this.props.user || '',
      password: this.props.password || '',
    }
  }

  handleTitleChange = (e) => {
    this.setState({
      user: e.target.value
    });
  };

  handleProjectChange = (e) => {
    this.setState({
      password: e.target.value
    });
  };

  handleSubmit = () => {
    this.props.onFormSubmit({
      id: this.props.id,
      user: this.state.user,
      password: this.state.password
    });
  };

  render() {
    const submitText = this.props.id ? 'Update' : 'Create';
    return (
      <div className='ui centered card'>
        <div className='content'>
          <div className='ui form'>
            <div className='field'>
              <label>User</label>
              <input 
                type='text' 
                value={this.state.User} 
                onChange={this.handleTitleChange}
              />
            </div>
            <div className='field'>
              <label>Password</label>
              <input 
                type='text' 
                value={this.state.password}
                onChange={this.handleProjectChange}
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





export default UsersDashboard;