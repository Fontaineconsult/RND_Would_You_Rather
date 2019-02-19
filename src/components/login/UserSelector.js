import React, { Component } from 'react'
import { connect } from 'react-redux'
import { dispatchActiveUser } from "../../actions/shared";
import UserScoreContainer from "../leaderboard/LeaderBoardContainer";
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

        console.log("THAATT HIST", this.props.history)
        console.log("THEM PROPPSSSS", this.props)
        console.log(window.location.pathname)

        if (this.props.location.state === undefined) {

            this.props.history.push("/")
        } else {
            this.props.history.push(this.props.location.state.from.pathname)

        }



    }

    setCompState(event){

        let userIndex = this.props.userList.name.indexOf(event.target.value);

        console.log("USERID", userIndex);

        this.setState({
            selectedUserName: event.target.value,
            selectedUserId: this.props.userList.id[userIndex]
        })

    }

    render (){

        return(

            <div>
                <form onSubmit={this.setUser}>
                    <select value={this.state.selectedUserName} onChange={this.setCompState}>
                        <option value="Select User">Select User</option>
                        {this.props.userList.name.map((user) => (<option value={user}>{user}</option>))}
                    </select>
                    <input type="submit" value='Login'/>
                </form>

            </div>

        )

    }

}

function mapStateToProps( {users, activeUser, ownProps} ) {

    let userList = {name: Object.keys(users).map(user => (users[user].name)), id: Object.keys(users)}
    console.log("ownProps", ownProps)

    return {users, activeUser, userList}

}

export default withRouter(connect(mapStateToProps)(UserSelector))