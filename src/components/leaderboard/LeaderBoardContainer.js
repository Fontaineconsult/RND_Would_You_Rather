import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserScoreContainer from './UserScoreContainer'

class LeaderBoardContainer extends Component {

    render () {

        return(
            <div>
                <br></br>
                LeaderBoardContainer

                {console.log(this.props.sortedUsers)}
                {(this.props.sortedUsers).map((item, i) => (

                    <UserScoreContainer key={i} user={item.name}/>
                ))}



            </div>


        )

    }

}

function mapStateToProps( {users, questions} ) {
    let sortedUsers = Object.keys(users).map((user) =>(
        {name: user, score: users[user].questions.length + Object.keys(users[user].answers).length}

    ));
    sortedUsers.sort(function (a,b) {
        return b.score - a.score
    });

    return {
        users,
        questions,
        sortedUsers,

    }

}

export default connect(mapStateToProps)(LeaderBoardContainer);