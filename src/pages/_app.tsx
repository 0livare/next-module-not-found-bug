import React from 'react'
import App from 'next/app'

import './_app.scss'

export default class MyApp extends App {
  constructor(props) {
    super(props)
  }

  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}
