import React, { Component } from 'react'
import classNames from 'classnames'
import Button from 'material-ui/Button'
import withStyles from 'material-ui/styles/withStyles'

import commonStyles from '../../styles/commonStyles'

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit
    },
    common: {
        boxShadow: 'none',
        borderRadius: 4,
        border: '1px solid',
        padding: '0px 32px'
    },
    white: {
        border: '1px solid',
        backgroundColor: '#fff',
        borderColor: commonStyles.primaryColor,
        color: commonStyles.primaryColor,
        '&:hover': {
            backgroundColor: commonStyles.primaryColor,
            color: '#fff'
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: commonStyles.primaryColor,
            color: '#fff'
        },
    },
    blue: {
        borderColor: '#fff',
        backgroundColor: commonStyles.primaryColor,
        color: '#fff',
        '&:hover': {
            color: commonStyles.primaryColor,
            backgroundColor: '#fff'
        },
        '&:active': {
            boxShadow: 'none',
            color: commonStyles.primaryColor,
            backgroundColor: '#fff'
        },
    },
    noBorder: {
        border: 'none'
    },
    largeFont: {
        fontSize: 20
    },
    long: {
        padding: '0px 56px'
    },
    short: {
        padding: '0px 8px'
    },
    noTextTransform: {
        textTransform: 'none',
    }
})

class SharedButton extends Component {
    render() {
        const { onClick, classes, white, noBorder, long, short, largeFont, noTextTransform, disabled, children } = this.props

        return (
            <Button
                variant="raised"
                onClick={onClick}
                disabled={disabled}
                className={classNames(classes.common, white ? classes.white : classes.blue, noBorder && classes.noBorder,
                    noTextTransform && classes.noTextTransform, largeFont && classes.largeFont,
                    long && classes.long, short && classes.short)}
                children={children}
            />
        )
    }
}

export default withStyles(styles)(SharedButton)
