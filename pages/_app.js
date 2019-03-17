import React from 'react'
import App, { Container } from 'next/app'
import GlobalStyle from '../styles/global';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Component {...pageProps} />
        <GlobalStyle/>
      </Container>
    )
  }
}

export default MyApp