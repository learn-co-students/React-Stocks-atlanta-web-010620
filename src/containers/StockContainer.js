import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {



  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.props.renderStocks(this.props.stocks)}
      </div>
    );
  }

}

export default StockContainer;




        // return <Stock
        //         ticker={stock.ticker}
        //         name={stock.name}
        //         type={stock.type}
        //         price={stock.price}
        //       />