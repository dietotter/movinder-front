import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import WithAuth, { userIsNotAuthenticated } from './Auth'
import StartingPage from '../modules/StartingPage'
import Events from '../modules/Events'
import * as authActions from '../modules/Authorization'

export class Routes extends Component {
  // shouldComponentUpdate (nextProps) {
  //   const {
  //     // session: { isLoggedIn: nextLogedIn },
  //     location: { pathname: nextPathName },
  //       authActions: {showAuth, changeAuthType }
  //   } = nextProps
  //   const { /*session: { isLoggedIn },*/ location: { pathname } } = this.props
  //   /* returns true only when pathname change happen (we move to another page) or signIn state changes */
  //   if (nextPathName === '/login') {
  //       changeAuthType('login')
  //       showAuth()
  //       return false
  //   }
  //   return /*nextLogedIn !== isLoggedIn ||*/ pathname !== nextPathName
  // }

    render () {
        const {showStartingPage} = this.props
        return (
            <Switch>
                <Route exact path='/' component={showStartingPage ? StartingPage : Events} />
                <Route path='/events' component={Events}/>
            </Switch>
        )
    }
}

export default withRouter(
  connect(
      ({routing, session, startingPageState: {showStartingPage}}) => ({
      // session,
        showStartingPage,
        routing
    }),
    dispatch => ({
      push: bindActionCreators(push, dispatch),
        authActions: bindActionCreators(authActions, dispatch)
    })
  )(Routes)
)
