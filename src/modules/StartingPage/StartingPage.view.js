import React, { Component } from 'react'
import SharedButton from '../../components/SharedButton'
import withStyles from 'material-ui/styles/withStyles'
import SvgIcon from 'material-ui/SvgIcon';

const styles = theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '&:after': {
            content: '""',
            left: 0,
            width: '100%',
            top: '300px',
            position: 'fixed',
            height: 'calc(100vh - 250px)',
            zIndex: -1,
            background: 'url(styles/icons/bg-popcorn.png)'
        }
    },
    title: {
        color: '#4a83ca',
        fontSize: 40,
        fontWeight: 300,
        lineHeight: '36px',
        textTransform: 'uppercase',
        margin: 0,
        marginBottom: 20
    }
})

class StartingPage extends Component {

    togglePage() {
        const {toggleStartingPage} = this.props
        toggleStartingPage(false)
    }

    render () {
        const {classes} = this.props

        return (
            <div className={classes.container}>
                <h2
                    className={classes.title}>
                    Welcom To
                </h2>
                <img
                    height = '80'
                    src = {'/styles/icons/logo_name.png'}
                />
                <img
                    width = '250'
                    style = {{
                        marginBottom: '20px'
                    }}
                    src = {'/styles/icons/logo.png'}
                />
                <SharedButton
                    white
                    long
                    largeFont
                    onClick={this.togglePage.bind(this)}
                >
                    Start
                </SharedButton>
            </div>
        )
    }
}

export default withStyles(styles)(StartingPage)
