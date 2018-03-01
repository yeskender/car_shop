import React, {Component} from 'react'
import App from '../App.js'
import {Link} from 'react-router-dom'

class Login extends React.Component {

  constructor (props) {
    super (props);

    this.state = {
      signed: false,
      username: '',
      password: '',
    }
  }

  handleUsernameChange = (e) => {
      this.setState({username: e.target.value});
  }


  handlePasswordChange = (e) => {
      this.setState({password: e.target.value});
  }

  handleSign = () => {
      this.setState ({signed: true});
  }

  render() {
    if (this.state.signed == false) {
      return (
        <div className="ui centered card">
          <form
            className="ui form"
            onSubmit={this.handleSign}>

            <div>
              <h1>Sign In</h1>
              <div className="field">
                <label><b>Username: </b></label>
                <input
                  type="text"
                  placeholder="Enter username"
                  onChange={this.handleUsernameChange}
                  required/>
              </div>
              <div className="field">
                <label><b>Password: </b></label>
                <input
                  type="password"
                  placeholder="Enter password"
                  onChange={this.handlePasswordChange}
                  required/>
              </div>
              <div className="field">
                <label>Gender:</label>
                <select className="ui dropdown" name="dropdown">
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
            <div>
            <button className="ui button"
                type="submit">Submit</button>
            </div>
          </form>
        </div>
      );
    }
    else {
      return (
        <div>
          <App as={Link} to="/catalog" username={this.state.username} password={this.state.password}/>
        </div>
      );
    }

  }

}

export default Login;
