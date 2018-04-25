import React, { Component } from 'react'
import SharedButton from '../../components/SharedButton'
import InviteRow from '../../components/InviteRow'
import AuthorizationDialog from '../../components/AuthorizationDialog'
import classNames from 'classnames'
import {map} from 'lodash'
import Grid from 'material-ui/Grid'
import swal from 'sweetalert'
import commonStyles from '../../styles/commonStyles'
import Icon from 'material-ui/Icon'

import withStyles from 'material-ui/styles/withStyles'

const styles = theme => ({
    row: {
        marginTop: theme.spacing.unit * 3
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    signUp: {
        backgroundColor: commonStyles.primaryColor,
        color: 'white',
        borderRadius: 8,
        padding: 16
    },
    add: {
        fontSize: 64,
        backgroundColor: 'white',
        marginTop: theme.spacing.unit * 4,
        marginLeft: theme.spacing.unit * 8,
        color: commonStyles.primaryColor,
        cursor: 'pointer'
    },
    marginTop: {
        marginTop: theme.spacing.unit * 3
    },
    mainContainer: {
        position: 'relative'
    }
})

class EventsView extends Component {

    componentDidMount() {
        const { eventsActions: {getAllInvitations}} = this.props
        getAllInvitations()
    }

    render () {
        const {classes, eventsState: {events},  authActions: {showAuth, changeAuthType}, session: {isLoggedIn}} = this.props

        return (

            <Grid container className={classes.mainContainer}>
                <Grid item xs={9}>
                    <div className={classes.container}>
                        {map(events, ({id, movie, cinema, invitedId, inviter: {name}}) => (
                            <InviteRow
                                className={classes.row}
                                key={id}
                                details={{name, movie, cinema}}
                                onClick={() => {console.log('should reply to the invite instead')}}
                            />
                        ))
                        }
                    </div>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={2} className={classes.marginTop}>
                    <div className={classes.container}>
                        {!isLoggedIn && <div className={classNames(classes.signUp, classes.container)}>
                            <div>
                                Still haven't got an account?
                            </div>
                            <SharedButton
                                className={classes.marginTop}
                                blue
                                short
                                onClick={() => {
                                    changeAuthType('signup')
                                    showAuth()
                                }}
                            >
                                Sign up
                            </SharedButton>
                        </div>}
                            <Icon
                                className={classes.add}
                                onClick={() => {
                                    if (isLoggedIn) {
                                        changeAuthType('invitationDialog')
                                        showAuth()
                                    } else {
                                        changeAuthType('login')
                                        showAuth()
                                    }
                                }}
                            >
                                add_circle
                            </Icon>
                    </div>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(EventsView)
