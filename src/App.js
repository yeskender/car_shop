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
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [
        "eggs",
        "meat",
        "apple",
        "yoghurt",
        "milk",
        "nuts",
        "orange",
      ],
      buttonBadge: 0,
      shoppingList: [],
        menuList: [
            {
                name: "Tasty Schnitzel",
                description: "A super-tasty Schnitzel - just awesome!",
                imgPath: "https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG",
                time: "1 hour",
                ingredients: [
                    {
                        name: "Meat",
                        amount: 1
                    },
                    {
                        name: "French fries",
                        amount: 10
                    }
                ]
            },
            {
                name: "Tasty Schnitzel",
                description: "A super-tasty Schnitzel - just awesome!",
                imgPath: "https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG",
                time: "1 hour",
                ingredients: [
                    {
                        name: "Meat",
                        amount: 1
                    },
                    {
                        name: "French fries",
                        amount: 10
                    },
                    {
                        name: "apple",
                        amount: 10
                    }
                ]
            }
        ]
    }
  }


  
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
