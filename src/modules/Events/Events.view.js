import React, { Component } from 'react'
import SharedButton from '../../components/SharedButton'
import withStyles from 'material-ui/styles/withStyles'

const styles = theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

class EventsView extends Component {

    render () {
        const {classes} = this.props

        return (
            <div className={classes.container}>
                kek
            </div>
        )
    }
}

export default withStyles(styles)(EventsView)
