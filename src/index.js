import React from 'react'
import ReactDOM from 'react-dom'

import { AppContainer } from 'react-hot-loader'

import './index.css'
import App from './App'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('react-root')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./App.js', () => {
    render(App)
  })
}
