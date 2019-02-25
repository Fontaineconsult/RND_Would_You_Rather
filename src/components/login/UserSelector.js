import React, { Component } from 'react'
import { connect } from 'react-redux'
import { dispatchActiveUser } from "../../actions/shared";
import { withRouter } from 'react-router'


class UserSelector extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedUserName: 'Not Logged In',
            selectedUserId: ''

        };
        this.setUser = this.setUser.bind(this);
        this.setCompState = this.setCompState.bind(this);

    }

    setUser(event){
        event.preventDefault();
        this.props.dispatch(dispatchActiveUser(this.state))


        if (this.props.location.state === undefined) {
            this.props.history.push("/")
        } else {
            this.props.history.push(this.props.location.state.from.pathname)
        }

    }

    setCompState(event){

        let userIndex = this.props.userList.name.indexOf(event.target.value);


        this.setState({
            selectedUserName: event.target.value,
            selectedUserId: this.props.userList.id[userIndex]
        })

    }

    render (){

        return(

            <div className="loginContainerFormContainer">
                <form className="loginContainerForm" onSubmit={this.setUser}>
                    <select value={this.state.selectedUserName} onChange={this.setCompState}>
                        <option id="none" value="Select User" disabled>Select User</option>
                        {this.props.userList.name.map((user) => (<option key={user} value={user}>{user}</option>))}
                    </select>
                    <input type="submit" value='Login'/>
                </form>

            </div>

        )

    }

}

function mapStateToProps( {users, activeUser, ownProps} ) {

    let userList = {name: Object.keys(users).map(user => (users[user].name)), id: Object.keys(users)}

    return {users, activeUser, userList}

}

export default withRouter(connect(mapStateToProps)(UserSelector))