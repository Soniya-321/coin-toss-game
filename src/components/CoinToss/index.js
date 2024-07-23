// Write your code here
import {Component} from 'react'
import './index.css'

const imagesList = [
  {
    imageId: 1,
    imagUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  },
  {
    imageId: 2,
    imagUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
  },
]

class CoinToss extends Component {
  state = {totalCount: 0, headCount: 0, tailCount: 0, headImage: true}

  onClickButton = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        headCount: prevState.headCount + 1,
        headImage: true,
      }))
    } else {
      this.setState(prevState => ({
        tailCount: prevState.tailCount + 1,
        headImage: false,
      }))
    }
    this.setState(prevState => ({totalCount: prevState.totalCount + 1}))
  }
  render() {
    const {totalCount, headCount, tailCount, headImage} = this.state
    return (
      <div className="app-container">
        <div className="card">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p className="head">Heads (or) Tails</p>
          {headImage ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
              className="toss-img"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
              className="toss-img"
            />
          )}
          <button type="button" className="button" onClick={this.onClickButton}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headCount}</p>
            <p className="count">Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
