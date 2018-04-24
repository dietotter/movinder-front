import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { push } from 'react-router-redux'
import StartingPage from './StartingPage.view'

export default connect(
    state => ({

    }),
    dispatch => ({
        push: bindActionCreators(push, dispatch)
    })
)(StartingPage)
