import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import App from './App'
import theme from './theme'
import { MuiThemeProvider } from 'material-ui/styles'

export default class Root extends Component {
  render () {
    const { store, history } = this.props
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <App store={store} />
          </ConnectedRouter>
        </Provider>
      </MuiThemeProvider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}
