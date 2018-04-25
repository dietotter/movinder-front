import React, { Component } from 'react'
import AuthorizationDialog from '../../components/AuthorizationDialog'

import withStyles from 'material-ui/styles/withStyles'

const styles = theme => ({
    dialog: {
        position: 'fixed',
        left: '30%',
        right: '30%',
        alignSelf: 'center'
    }
})

class Authorization extends Component {

    render () {
        const {classes, authState: {authType, authHidden}, authActions: {hideAuth}, sessionActions: {logIn, signUp}, eventsActions: {addInvitation}, session: {user}} = this.props

        if (authHidden) {
            return (
                <div></div>
            )
        }

        let userId

        if (user) {
            userId = user.id
        }

        return (
            <div className={classes.dialog}>
                <AuthorizationDialog
                    type={authType}
                    hideAuth={hideAuth}
                    onSubmit={authType === 'login' ? logIn : (authType === 'invitationDialog' ? addInvitation : signUp)}
                    userId={userId}
                />
            </div>
        )
    }
}

export default withStyles(styles)(Authorization)
