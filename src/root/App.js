/* eslint-disable import/no-named-as-default */
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { rootStyle as styles } from './theme'
import Routes from './Routes'
import AppBar from './AppBar'
import ls from '../utils/ls'
import Authorization from '../modules/Authorization'

export class App extends React.Component {
    componentDidMount() {
        const {store} = this.props
        store.subscribe(() => {ls.save('state', store.getState())})
    }

  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          {/*<ErrorBoundary>*/}
            <AppBar />
          {/*</ErrorBoundary>*/}
          <div className={classes.content}>
            <Routes />
          </div>
            <Authorization />
        </div>
        {/*<ErrorBoundary>*/}
          {/*<Snackbar />*/}
        {/*</ErrorBoundary>*/}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.element
}

export default withStyles(styles)(App)
