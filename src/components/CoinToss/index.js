// Write your code here
import {Component} from 'react'
import './index.css'

const headsImageUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsImageUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {tossresultImage: headsImageUrl, headsCount: 0, tailsCount: 0}

  onTossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadCounts = headsCount
    let latestTailsCount = tailsCount

    if (tossResult === 0) {
      tossImage = headsImageUrl
      latestHeadCounts += 1
    } else {
      tossImage = tailsImageUrl
      latestTailsCount += 1
    }

    this.setState({
      tossresultImage: tossImage,
      headsCount: latestHeadCounts,
      tailsCount: latestTailsCount,
    })
  }

  render() {
    const {tossresultImage, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount
    return (
      <div className="app-container">
        <div className="card-container">
          <div className="content-container">
            <h1 className="heading">Coin Toss Game</h1>
            <p className="description">Heads (or) Tails</p>
            <img
              src={tossresultImage}
              alt="toss result"
              className="toss-image"
            />
            <button
              type="button"
              onClick={this.onTossCoin}
              className="toss-button"
            >
              Toss Coin
            </button>
            <div className="result-container">
              <p>Total: {totalCount}</p>
              <p>Heads: {headsCount}</p>
              <p>Tails: {tailsCount}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
