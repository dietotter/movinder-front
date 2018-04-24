import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import { appBar as styles } from './theme'
import { bindActionCreators } from 'redux'
import { push } from 'react-router-redux'
import {map} from 'lodash'
import SharedButton from '../components/SharedButton'
import classNames from 'classnames'


export class AppBarComponent extends Component {
    constructor (props, context) {
        super(props, context)
    }

    render () {
        const { classes, push, showStartingPage } = this.props

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
            title: 'log in'
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
                                onClick={() => push(`/${route}`)}
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
        ({startingPageState: {showStartingPage}}) => ({
            showStartingPage
        }),
        dispatch => ({
            push: bindActionCreators(push, dispatch)
        })
    )(AppBarComponent)
)
