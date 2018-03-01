import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Icon} from 'semantic-ui-react'
import helpers from './helpers';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import {
    Button,
    Menu,
    Container,
    Segment,
    Visibility
} from 'semantic-ui-react'
import Login from './Login';
import ShoppingCart from './ShoppingList/ShoppingCart'

class MainMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: props.activeItem,
            open: false,
            buttonBadge: 0,
            shoppingList: [],
            ingredients: [
                "eggs",
                "meat",
                "apple",
                "yoghurt",
                "milk",
                "nuts",
                "orange",
            ],
        };
    }


  handleRemoveFromList = (product) => {
    let array = this.state.shoppingList
    array = array.filter((data) => data.toLowerCase() !== product.toLowerCase())
    this.handleRemoveFromBadge()
    this.setState({
      shoppingList: array
    })
  }

  handleAddToBadge = () => {
    this.setState({
      buttonBadge: this.state.buttonBadge + 1
    })
  }
  handleRemoveFromBadge = () => {
    this.setState({
      buttonBadge: this.state.buttonBadge - 1
    })
  }
  handleAddToShoppingList = (product, state) => {
    let list = this.state.shoppingList
    const check = list.filter((data) => data.toLowerCase() === product.toLowerCase())
    if (check.length === 0) {
        list.push(product)
        this.handleAddToBadge()
        this.setState({
          shoppingList: list
        })
    }
    else {
      if (state) {
        this.handleRemoveFromList(product)
        this.handleRemoveFromBadge()
      }
    }
  }

    onMenuItemClick = (e, {name}) => {
        this.setState({activeItem: name})
    };

    render() {
        const {activeItem} = this.state;
        return (
            <Visibility>
                <Segment
                    inverted
                    textAlign='center'
                    style={{padding: '1em 0em'}}
                    vertical
                >
                    <Container>
                        <Menu inverted pointing secondary size='large'>
                            <Menu.Item as={Link} to="/" name="home" active={activeItem === "home"} onClick={this.onMenuItemClick}>Home</Menu.Item>
                            <Menu.Item as={Link} to="/products" name='products' active={activeItem === "products"} onClick={this.onMenuItemClick}>Products</Menu.Item>                        
                            <Menu.Item as={Link} to="/about" name="about" active={activeItem === "about"} onClick={this.onMenuItemClick}>About</Menu.Item>
                            <Menu.Item position='right'>
                                <Button as={Link} to="/login" active={activeItem === "login"} onClick={this.onMenuItemClick} inverted>Log in</Button>
                                <Button as='a' inverted style={{marginLeft: '0.5em'}}>Sign Up</Button>
                                <Button.Group>
                                        <Link to="/shoppingcart">
                                            <Button animated='vertical'>
                                                <Button.Content hidden>Cart</Button.Content>
                                                <Button.Content visible>
                                                <Icon name='shop' />
                                                </Button.Content>
                                            </Button>
                                        </Link>
                                    <Button style={{"fontSize": "12px"}} disabled> {this.state.buttonBadge} </Button>
                                </Button.Group>
                                

                            </Menu.Item>
                            
                        </Menu>
                    </Container>
                </Segment>
                <Route path="/shoppingList" render={props => <ShoppingCart
                                                          ingredients={this.state.ingredients}
                                                          onRemoveFromList={this.handleRemoveFromList}
                                                          shoppingList={this.state.shoppingList}
                                                          onAddToShoppingList={this.handleAddToShoppingList}
                                                        />}
                />
            </Visibility>
        );
    }
}

export default MainMenu;