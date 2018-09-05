import React, { Component } from 'react'
import memory from './images/WechatIMG1.jpg'
import BibleWords from './components/BibleWords'

import './style.css'

class App extends Component {
  
  render() {
    
    return (
      <div className={'backgroundImage'}>
        <img className={'ilustration'} src={memory} alt={'memory'} ></img>
        <BibleWords />
      </div>
    )
  }
}

export default App
