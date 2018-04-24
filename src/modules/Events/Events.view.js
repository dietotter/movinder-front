import React, { Component } from 'react'
import SharedButton from '../../components/SharedButton'
import InviteRow from '../../components/InviteRow'
import {map} from 'lodash'

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
    }
})

class EventsView extends Component {

    componentDidMount() {
        const { eventsActions: {getAllInvitations}} = this.props
        getAllInvitations()
    }

    render () {
        const {classes, eventsState: {events}} = this.props

        return (
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
        )
    }
}

export default withStyles(styles)(EventsView)
