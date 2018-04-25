import React, { Component } from 'react'
import classNames from 'classnames'
import Button from 'material-ui/Button'
import Avatar from 'material-ui/Avatar'
import withStyles from 'material-ui/styles/withStyles'
import Grid from 'material-ui/Grid'
import SharedButton from '../SharedButton'
import Input from 'material-ui/Input'

import commonStyles from '../../styles/commonStyles'

const styles = theme => ({
    container: {
        backgroundColor: commonStyles.primaryColor,
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000
    },
    input: {
        margin: theme.spacing.unit,
        color: 'white',
        border: '1px solid',
        borderRadius: 8,
        borderColor: 'white',
        paddingLeft: 16,
        paddingRight: 16,
    },
    header: {
        color: 'white',
        margin: theme.spacing.unit,
        marginTop: theme.spacing.unit * 2,
        fontSize: 20
    },
    submit: {
        margin: theme.spacing.unit,
        marginBottom: theme.spacing.unit * 2,
        display: 'flex',
    },
    submitBtn: {
        margin: theme.spacing.unit
    }
})

const TextInput = ({className, onChange, label, value, secure }) => (
    <Input
        placeholder={label}
        className={className}
        onChange={onChange}
        value={value}
        disableUnderline
        type={secure ? 'password' : ''}
    />
)

class AuthorizationDialog extends Component {
    constructor(props, context) {
        super(props, context)

        const { type } = props
        if (type === 'invitationDialog') {
            this.state = {
                city: '',
                cinema: '',
                movie: ''
            }
        } else {
            this.state = {
                name: '',
                city: '',
                email: '',
                password: ''
            }
        }
    }

    handleChange = (name) => {
        return ({target}) => {
            this.setState({
                [name]: target.value
            })
        }
    }


    handleSubmit(onSubmit) {

        const {hideAuth, userId, type} = this.props

        let data = {
            ...this.state
        }

        if (type === 'invitationDialog') {
            data.inviterId = userId
        }

        return () => {
            onSubmit(data)
            hideAuth()
        }
    }

    render() {
        const { classes, type, hideAuth, onSubmit } = this.props
        const { name, city, email, password, cinema, movie } = this.state

        return (
            <div className={classes.container}>
                <div className={classes.header}>{type === 'signup' ? 'SIGN UP' : (type === 'invitationDialog' ? 'CREATE INVITATION' :'LOG IN')}</div>
                {type !== 'invitationDialog' && <TextInput
                    label='Name'
                    onChange={this.handleChange('name')}
                    value={name}
                    className={classes.input}
                />}
                { type === 'signup' || type === 'invitationDialog' && <TextInput
                    label='City'
                    onChange={this.handleChange('city')}
                    value={city}
                    className={classes.input}
                />}
                { type === 'signup' && <TextInput
                    label='Email'
                    onChange={this.handleChange('email')}
                    value={email}
                    className={classes.input}
                />}
                {type !== 'invitationDialog' && <TextInput
                    label='Password'
                    onChange={this.handleChange('password')}
                    value={password}
                    className={classes.input}
                    secure
                />}
                { type === 'invitationDialog' && <TextInput
                    label='Cinema'
                    onChange={this.handleChange('cinema')}
                    value={cinema}
                    className={classes.input}
                />}
                { type === 'invitationDialog' && <TextInput
                    label='Movie'
                    onChange={this.handleChange('movie')}
                    value={movie}
                    className={classes.input}
                />}
                <div className={classes.submit}>
                    <SharedButton
                        white
                        className={classes.submitBtn}
                        onClick={hideAuth}
                    >
                        Cancel
                    </SharedButton>
                    <SharedButton
                        white
                        className={classes.submitBtn}
                        onClick={this.handleSubmit(onSubmit).bind(this)}
                    >
                        Submit
                    </SharedButton>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(AuthorizationDialog)
