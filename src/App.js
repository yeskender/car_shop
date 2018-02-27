import React, { Component } from 'react';
import logo from './logo.svg';
import Home from './Components/Home';
import About from './Components/About';
import Products from './Components/Products';
import Login from './Components/Login';
import Footer from './Components/Footer';
import MainMenu from './Components/MainMenu';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/:id?" component={PageRoute}/>
          <Route exact path="/" component={Home}/>
          <Route path="/products" component={Products} />
          <Route path="/login" component={LoginRoute}/>
          <Route path="/about" component={About}/>
          <Footer/>
        </div>
      </Router>
    );
  }
}
const ProductDetailRoute = ({match}) => (
    <div>
        <Products title="Car Shop"/>
    </div>
)
const LoginRoute = () => (
    <div>
        <Login title="Hello" />
    </div>
)
const PageRoute = ({match}) => (
    <div>
        <MainMenu activeItem={match.params.id != null ? match.params.id : "home"}/>
    </div>
)


export default App;
