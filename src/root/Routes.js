import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import WithAuth, { userIsNotAuthenticated } from './Auth'
import StartingPage from '../modules/StartingPage'

export class Routes extends Component {
  // shouldComponentUpdate (nextProps) {
  //   const {
  //     session: { isLoggedIn: nextLogedIn },
  //     location: { pathname: nextPathName }
  //   } = nextProps
  //   const { session: { isLoggedIn }, location: { pathname } } = this.props
  //   /* returns true only when pathname change happen (we move to another page) or signIn state changes */
  //   return nextLogedIn !== isLoggedIn || pathname !== nextPathName
  // }

  render () {
    return (
      <Switch>
        <Route exact path='/' component={StartingPage} />
        {/*<WithAuth>*/}
          {/*<Route path='/about' component={AboutPage} />*/}
          {/*<Route path='/dialog' component={DialogPage} />*/}
          {/*<Route path='/users' component={UsersList} />*/}
          {/*<Route path='/user/:userId' component={UserDetails} />*/}
          {/*<Route path='/products' component={ProductsList} />*/}
          {/*<Route path='/buyers' component={BuyersList} />*/}
          {/*<Route path='/wholesalers' component={WholesalersList} />*/}
          {/*<Route path='/fileUpload' component={FileUpload} />*/}
          {/*<Route*/}
            {/*path='/wholesaler/:wholesalersId'*/}
            {/*component={WholesalerDetails}*/}
          {/*/>*/}
          {/*<Route path='/cloud-functions' component={CloudFunctions} />*/}
          {/*<Route path='/files' component={FilesList} />*/}
          {/*<Route path='/bigQuery' component={BigQuery} />*/}
          {/*<Route path='/mongoUpdate' component={MongoUpdate} />*/}
        {/*</WithAuth>*/}
        {/*<Route component={NotFoundPage} />*/}
      </Switch>
    )
  }
}

export default withRouter(
  connect(
    state => ({
      // session: state.session,
      routing: state.routing
    }),
    dispatch => ({
      push: bindActionCreators(push, dispatch)
    })
  )(Routes)
)
