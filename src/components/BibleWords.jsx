import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BibleWords extends Component {

  static propTypes = {
    text: PropTypes.string,
    reference: PropTypes.string
  }

  static defaultProps = {
    text: '我实实在在地告诉你们：一粒麦子不落在地里死了，仍旧是一粒；若是死了，就结出许多子粒来。',
    reference: '约翰福音12：24'
  }

  render() {
    const { text, reference } = this.props
    return (
      <div className={'bibleWords'}>
        <p className={'text'}>{text}</p>
        <p className={'ref'}>{`（${reference}）`}</p>
      </div>
    )
  }
}

export default BibleWords