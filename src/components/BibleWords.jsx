import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BibleWords extends Component {

  static propTypes = {
    words: PropTypes.string,
    ref: PropTypes.string,
    id: PropTypes.string
  }

  static defaultProps = {
    words: '我实实在在地告诉你们：一粒麦子不落在地里死了，仍旧是一粒；若是死了，就结出许多子粒来。',
    ref: '(约翰福音12：24)',
    id: '1-1'
  }

  render() {
    const { words, ref } = this.props
    return (
      <div className={'bibleWords'}>
        <p className={'words'}>{words}</p>
        <p className={'ref'}>{ref}</p>
      </div>
    )
  }
}

export default BibleWords