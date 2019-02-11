import React, { Component } from 'react'
import UserSelector from "./UserSelector"
import { connect } from 'react-redux'
import { dispatchLogout } from '../../actions/shared'


class LogoutContainer extends Component {

    componentDidMount() {

        this.props.dispatch(dispatchLogout(this.props.activeUser))

    }

    render () {
        return(
            <div>
                Logging you out...
            </div>
        )
    }

}

function mapStateToProps({activeUser}) {

    return{ activeUser }
}

export default connect(mapStateToProps)(LogoutContainer);