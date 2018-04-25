import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { push } from 'react-router-redux'
import EventsView from './Events.view'
import {actions} from './Events.state'
import {actions as authActions} from '../Authorization/Authorization.state'

export default connect(
    ({ eventsState, session }) => ({
        eventsState, session
    }),
    dispatch => ({
        push: bindActionCreators(push, dispatch),
        eventsActions: bindActionCreators(actions, dispatch),
        authActions: bindActionCreators(authActions, dispatch)
    })
)(EventsView)
