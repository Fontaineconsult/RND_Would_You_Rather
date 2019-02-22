import React, { Component} from 'react'
import { connect } from 'react-redux'
import AnsweredQuestions from './AnsweredQuestions'
import CreatedQuestions from './CreatedQuestions'


let tempImgSize = {
    height: 30,
    width: 30

};


function TotalScore(props) {
    let totalScore = props.totalscore
    return <div>Total Score {totalScore}</div>

}

function UserProfileImage(props) {
    return <img src={props.image}
                style={tempImgSize}/>

}

class UserScoreContainer extends Component {

    render() {

        let createdCount = this.props.users[this.props.user].questions.length;
        let answeredCount = Object.keys(this.props.users[this.props.user].answers).length;

        return(
        <div className="userScoreContainer">

            <div className="userScoreName" >{this.props.users[this.props.user].name}</div>
            <div className="scoresOuterContainer">
                <div className="userImageContainer">
                    <UserProfileImage image={this.props.users[this.props.user].avatarURL} />
                </div>
                <div className="scoresContainer">
                    <div className="scoresContainerLeft">
                        <AnsweredQuestions  answeredCount={answeredCount}/>
                        <CreatedQuestions  createdCount={createdCount}/>
                    </div>
                    <div className="scoresContainerRight">
                        <TotalScore totalscore = {createdCount + answeredCount}/>
                    </div>

                </div>

            </div>




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


export default connect(mapStateToProps)(UserScoreContainer);