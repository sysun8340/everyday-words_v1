import React, { Component } from 'react'
import BibleWords from './components/BibleWords'
import './style.css'
import { Button } from 'semantic-ui-react'
import memory from './images/WechatIMG1.jpg'
import 'semantic-ui-css/semantic.min.css'
import { genRandomId, getIdByDate, getWordsById } from './utils'

class App extends Component {

  state = {
    id: getIdByDate(new Date())
  }

  render() {
    const msg = getWordsById(this.state.id)
    
    return (
      <div className={'backgroundImage'}>
        <img className={'ilustration'} src={memory} alt={'memory'} ></img>
        <BibleWords {...msg} />
        <section className={'backgroundText'}>
          <p>每日一句</p>
          <p>WALK WITH GOD</p>
        </section>
        <Button 
          color={'google plus'}
          className={'button'}
          onClick={() => this.setState({id: genRandomId()})}
        >
          随机一下
        </Button>
      </div>
    )
  }
}

export default App
