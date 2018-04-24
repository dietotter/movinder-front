/* eslint-disable import/no-named-as-default */
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { rootStyle as styles } from './theme'
import Routes from './Routes'

export class App extends React.Component {
  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          {/*<ErrorBoundary>*/}
            {/*<AppBar />*/}
          {/*</ErrorBoundary>*/}
          {/*<div className={classes.content}>*/}
            <Routes />
          {/*</div>*/}
          {/*<ErrorBoundary>*/}
            {/*<DialogRoot />*/}
          {/*</ErrorBoundary>*/}
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
