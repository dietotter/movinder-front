import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { push } from 'react-router-redux'
import EventsView from './Events.view'

export default connect(
    state => ({

    }),
    dispatch => ({
        push: bindActionCreators(push, dispatch)
    })
)(EventsView)
