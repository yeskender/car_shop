import React, {Component} from 'react'

class Cart extends Component {
  render() {
    return (
      <div className="ui segment">
          <div className="column">
            <div className="row">
              <div className="col-md-11">
                <p>{this.props.data.toUpperCase()}</p>
                <div>
                  average market cost 10
                  <i className="dollar icon"></i>
                </div>
              </div>
              <div className="col-md-1">
                <button className="ui icon button" onClick={() => this.props.onRemoveFromList(this.props.data)}>
                  <i className="remove icon"></i>
                </button>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default Cart
