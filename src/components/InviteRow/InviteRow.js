import React, { Component } from 'react'
import classNames from 'classnames'
import Button from 'material-ui/Button'
import Avatar from 'material-ui/Avatar'
import withStyles from 'material-ui/styles/withStyles'
import Grid from 'material-ui/Grid'

import SharedButton from '../SharedButton'

import commonStyles from '../../styles/commonStyles'

const styles = theme => ({
    container: {
        backgroundColor: commonStyles.secondaryColor,
        borderRadius: 4,
        alignItems: 'center',
        height: 132
    },
    infoContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        color: commonStyles.primaryColor
    },
    avatar: {
        width: 124,
        height: 124,
        marginLeft: 8
    },
    infoRow: {
        marginBottom: 4
    }
})

const InfoRow = ({className, iconSrc, label, title}) => (
    <div className={className}>
        <img src={iconSrc} width={16} height={16}/>
        <b> {label}: </b>{title}
    </div>
)

class InviteRow extends Component {
    render() {
        const { onClick, classes, details, className } = this.props

        const { name, movie, cinema } = details

        return (
            <Grid container className={classNames(classes.container, className)}>
                <Grid item xs={2}>
                    <Avatar
                        src='http://via.placeholder.com/250x250'
                        className={classes.avatar}
                    />
                </Grid>
                <Grid item xs={4} className={classes.infoContainer}>
                    <div>
                        {name}
                    </div>
                    <br/>
                    <InfoRow
                        className={classes.infoRow}
                        iconSrc='../../styles/icons/popcorn.png'
                        label='Movie'
                        title={movie}
                    />
                    <InfoRow
                        className={classes.infoRow}
                        iconSrc='../../styles/icons/icon-cinema.png'
                        label='Cinema'
                        title={cinema}
                    />
                    <InfoRow
                        className={classes.infoRow}
                        iconSrc='../../styles/icons/clock.png'
                        label='Time'
                        title='18:00'
                    />
                </Grid>
                <Grid item xs={4}/>
                <Grid item xs={2}>
                    <SharedButton
                        blue
                        largeFont
                        onClick={onClick}
                    >
                        Join
                    </SharedButton>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(InviteRow)
