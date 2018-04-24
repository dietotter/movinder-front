import React, { Component } from 'react'
import SharedButton from '../../components/SharedButton'
import withStyles from 'material-ui/styles/withStyles'
import SvgIcon from 'material-ui/SvgIcon';

const styles = theme => ({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

class StartingPage extends Component {

    render () {
        const {classes} = this.props

        return (
            <div className={classes.container}>
                <SvgIcon>

                </SvgIcon>
                <SharedButton
                    white
                    long
                    largeFont
                    onClick={() => {console.log('======== clicked kek =========')}}
                >
                    Start
                </SharedButton>
            </div>
        )
    }
}

export default withStyles(styles)(StartingPage)
