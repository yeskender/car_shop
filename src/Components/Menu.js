import React, {Component} from 'react'
import logo from '../logo.png'
import {
    Icon,
    Button,
    Menu as Main,
    Container,
    Segment,
    Visibility
} from 'semantic-ui-react'
import {BrowserRouter as Router, Route, Navlink, Link} from 'react-router-dom'
import Home from '../pages/Home.js'


class Menu extends React.Component {

  constructor(props) {
    super (props);
  }




  render() {
    return (
      <Visibility>
        <Segment
          inverted
          textAlign='center'
          style={{padding: '1em 0em'}}
          vertical
        >
          <Container>
            <Main inverted pointing secondary size='large'>
              <img className="ui small image" src={logo} alt={"logo"}/>
              <Main.Item as={Link} to="/catalog" name="catalog"  >Catalog</Main.Item>
              <Main.Item as={Link} to="/mycars" name='mycars'  >Cart</Main.Item>  
              <Main.Item as={Link} to="/about" name="about" >About</Main.Item>
              <Main.Item as={Link} to="/editablecar" name="editablecar" >Catalog2</Main.Item>
              <Main.Item as={Link} to="" name="username" >Welcome, {this.props.username}!</Main.Item>
              <Main.Item position='right'>
                  <Button as={Link} to="/login" inverted>Log in</Button>
                  <Button as='a' inverted style={{marginLeft: '0.5em'}}>Sign Up</Button>
                  <Button.Group>
                    <Link to="/mycars">
                      <Button style={{marginLeft: '0.5em'}} animated='vertical'>
                        <Button.Content hidden>Cart</Button.Content>
                        <Button.Content visible>
                          <Icon name='shop' />
                        </Button.Content>
                      </Button>
                    </Link>
                    <Button style={{"fontSize": "12px"}} disabled> {} </Button>
                  </Button.Group>
                                

              </Main.Item>                                          
            </Main>
          </Container>
        </Segment>
      </Visibility>
    );
  }
}

export default Menu;
