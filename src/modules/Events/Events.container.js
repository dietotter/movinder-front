import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { push } from 'react-router-redux'
import EventsView from './Events.view'
import {actions} from './Events.state'

export default connect(
    ({ eventsState }) => ({
        eventsState
    }),
    dispatch => ({
        push: bindActionCreators(push, dispatch),
        eventsActions: bindActionCreators(actions, dispatch)
    })
)(EventsView)
