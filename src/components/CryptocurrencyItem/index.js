import './index.css'


const CryptocurrencyItem = ({crypto}) => {
  const {name, usdValue, ueroValue, img} = crypto

  return (
    <li className="table-header">
      <div className="table-header-cell coin-name1">
        <div className="coin-info-container1">
          <img className="coin-image1" src={img} alt={name} />
          <p className="table-header-cell coin-name1">{name}</p>
        </div>
      </div>
      <p className="table-header-cell">{usdValue}</p>
      <p className="table-header-cell">{ueroValue}</p>
    </li>
  )
}

export default CryptocurrencyItem
