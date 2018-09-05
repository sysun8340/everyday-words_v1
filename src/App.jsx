import React, { Component } from 'react'
import memory from './images/WechatIMG1.jpg'
import BibleWords from './components/BibleWords'
import { getWordsMessage } from './utils'
import './style.css'

class App extends Component {

  state = {
    id: '',
    words: '',
    reference: '',
    currentDate: new Date()
  }

  render() {
    const msg = getWordsMessage(this.state.currentDate)
    return (
      <div className={'backgroundImage'}>
        <img className={'ilustration'} src={memory} alt={'memory'} ></img>
        <BibleWords {...msg} />
      </div>
    )
  }
}

export default App
