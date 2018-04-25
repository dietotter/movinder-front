import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { push } from 'react-router-redux'
import Authorization from './Authorization.view'
import {actions} from './Authorization.state'
import {actions as sessionActions} from '../../redux/sessionState'
import {actions as eventsActions} from '../Events/Events.state'

export default connect(
    ({ authState, session }) => ({
        authState, session
    }),
    dispatch => ({
        push: bindActionCreators(push, dispatch),
        authActions: bindActionCreators(actions, dispatch),
        sessionActions: bindActionCreators(sessionActions, dispatch),
        eventsActions: bindActionCreators(eventsActions, dispatch)
    })
)(Authorization)
