import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserScoreContainer from './UserScoreContainer'

class LeaderBoardContainer extends Component {

    render () {

        return(
            <div>
                <br></br>
                LeaderBoardContainer


                {Object.keys(this.props.users).map((item, i) => (
                        <UserScoreContainer key={i} user={item}/>
                ))}



            </div>


        )

    }

}



function mapStateToProps( {users, questions} ) {


    return {
        users,
        questions

    }

}

export default connect(mapStateToProps)(LeaderBoardContainer);