import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import { appBar as styles } from './theme'
import { bindActionCreators } from 'redux'
import { push } from 'react-router-redux'
import {map} from 'lodash'
import SharedButton from '../components/SharedButton'
import classNames from 'classnames'
import {actions as authActions} from '../modules/Authorization'
import {actions as sessionActions} from '../redux/sessionState'

export class AppBarComponent extends Component {
    constructor (props, context) {
        super(props, context)
    }

    render () {
        const { classes, push, showStartingPage, authActions: {showAuth, changeAuthType},
            session: {isLoggedIn}, sessionActions: {signOut} } = this.props

        let nav = [{
            route: 'events',
            title: 'nearest'
        }, {
            route: 'createInvitation',
            title: 'create'
        }, {
            route: 'invites',
            title: 'invites'
        }, {
            route: 'settings',
            title: 'settings'
        }, {
            route: 'login',
            title: isLoggedIn ? 'log out' : 'log in'
        }]

        return (
            showStartingPage ? <div/> :
            <div className={classes.appBar}>
                <div className={classes.images}>
                    <img onClick={() => push('/')} height="80" className={classes.pointerClick} src="../styles/icons/logo.png"/>
                    <img className={classNames(classes.imageMargin, classes.pointerClick)} height="80" src="../styles/icons/logo_name.png"/>
                </div>
                <div className={classes.navigation}>
                    {map(nav, ({route, title}, i) => (
                            <SharedButton
                                white
                                noBorder
                                short
                                underlined
                                onClick={route !== 'login' ? () => push(`/${route}`) : () => {
                                    if (isLoggedIn) {
                                        signOut()
                                    }
                                    else {
                                        changeAuthType('login')
                                        showAuth()
                                    }
                                }}
                                key={i}
                            >
                                {title}
                            </SharedButton>
                        )
                    )}
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(
    connect(
        ({startingPageState: {showStartingPage}, session}) => ({
            showStartingPage, session
        }),
        dispatch => ({
            push: bindActionCreators(push, dispatch),
            authActions: bindActionCreators(authActions, dispatch),
            sessionActions: bindActionCreators(sessionActions, dispatch)
        })
    )(AppBarComponent)
)
