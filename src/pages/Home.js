import React, {Component} from 'react'

import Car from '../Components/Car.js'

class Home extends React.Component {

  constructor(props) {
    super (props);

  }

  render() {
    const feedsAPI = this.props.feeds.map((car) => {
      return(
          <div>
            <Car car={car}/>
          </div>
        );
    });

    return (
      <div className="home">
        <ul>{feedsAPI}</ul>
      </div>
    );
  }

}

export default Home;
