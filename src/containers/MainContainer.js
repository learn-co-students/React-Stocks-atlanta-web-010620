import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    myStocks: [],
    listedStocks: [],
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(resp => resp.json())
    .then(stocks => this.setState({stocks: stocks, listedStocks: stocks.slice()}))
  }

  handleBuy = (stock) => {
    this.setState({
      myStocks: [...this.state.myStocks, stock],
    })
  }

  handleSell = (stock) => {
    this.setState({
      myStocks: this.state.myStocks.filter(s => s !== stock),
    })
  }

  changeFilter = (e) => {
    this.setState({
      listedStocks:this.state.stocks.slice().filter(stock => stock.type === e.target.value)
    })
  }

  handleSortByName = (e) => {
    this.setState({
      listedStocks: this.state.listedStocks.sort((a,b) => a.name > b.name ? 1 : -1)
    })
  }

  handleSortByPrice = (e) => {
    this.setState({
      listedStocks: this.state.listedStocks.sort((a,b) => a.price > b.price ? 1 : -1)
    })
  }

  render() {
    return (
      <div>
        <SearchBar handleSortByPrice={this.handleSortByPrice} handleSortByName={this.handleSortByName} changeFilter={this.changeFilter}/>

          <div className="row">
            <div className="col-8">

              <StockContainer handleBuy={this.handleBuy} stocks={this.state.listedStocks}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.myStocks} handleSell={this.handleSell}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
