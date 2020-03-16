import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
import Stock from '../components/Stock'

class MainContainer extends Component {
  state = {
    stocks:[],
    filter:""
  }

  // 1. function to fetch stocks 
  fetchStocks = () => {
    fetch('http://localhost:3000/stocks')
    .then(resp => resp.json())
    .then(json => {
      console.log(json)
      this.setState({stocks:json})
    })
  }
  componentDidMount = () => this.fetchStocks()

  // render stock container based on what the current filter value is 
  renderStockContainer = () => {
    if (this.state.filter ===""){
      console.log(this.stocks)
      return <StockContainer stocks={this.state.stocks} renderStocks={this.renderStocks}/>
    }else{
      let filteredStocks = this.state.stocks.filter(stock => stock.type === this.state.filter)
      return <StockContainer stocks={filteredStocks} renderStocks={this.renderStocks}/>
    }
  }

  // render list of stocks from the component's list of stocks 
  renderStocks(array){
    return array.map(stock => {
          return <Stock
              key={stock.id}
              ticker={stock.ticker}
              name={stock.name}
              type={stock.type}
              price={stock.price}
            />
    })
  }

  // change filter type on checkbox onChange 
  changeSort = (e) => {
    if (e.target.checked){
      if (e.target.value === 'price'){
        this.sortByPrice()
      }else if (e.target.value === 'name'){
        this.sortByName()
      }
    }
  }

  changeFilter = (e) => {
    this.setState({filter:e.target.value})
  }

  sortByPrice = () => {
    const sortedStocks = [... this.state.stocks]
    sortedStocks.sort((a, b) => (a.price > b.price) ? 1 : -1)
    this.setState({stocks:sortedStocks})
  }

  sortByName = () => {
    const sortedStocks = [... this.state.stocks]
    sortedStocks.sort((a, b) => (a.name > b.name) ? 1 : -1)
    this.setState({stocks:sortedStocks})
  }


  render() {
    return (
      <div>
        <SearchBar changeSort={this.changeSort} changeFilter={this.changeFilter}/>

          <div className="row">
            <div className="col-8">

              {/* <StockContainer/> */}
              {this.renderStockContainer()}

            </div>
            <div className="col-4">

              <PortfolioContainer/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
