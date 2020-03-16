import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          //render the list of stocks here
          this.props.stocks.map(stock => {
            return <Stock stock={stock} handleBuy={this.props.handleBuy} key={stock.id}/>
          })
        }
      </div>
    );
  }

}

export default StockContainer;
