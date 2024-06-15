// Write your JS code here
import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem/index'

class CryptocurrenciesList extends Component {
  state = {isLoading: true, cryptocurrenciesData: []}

  componentDidMount() {
    this.getCryptocurrenciesData()
  }

  getCryptocurrenciesData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      ueroValue: eachItem.euro_value,
      img: eachItem.currency_logo,
    }))
    this.setState({cryptocurrenciesData: formattedData, isLoading: false})
  }

  render() {
    const {cryptocurrenciesData, isLoading} = this.state
    return (
      <div className="bg-container1">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="bg-container1">
            <h1 className="title">Cryptocurrency Tracker</h1>
            <img
              className="bg-image1"
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
            />
            <ul className="table-body">
              <li className="table-header">
                <p className="table-header-cell coin-name1">Coin Type</p>
                <p className="table-header-cell">USD</p>
                <p className="table-header-cell">EURO</p>
              </li>
              {cryptocurrenciesData.map(item => (
                <CryptocurrencyItem key={item.id} crypto={item} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default CryptocurrenciesList
