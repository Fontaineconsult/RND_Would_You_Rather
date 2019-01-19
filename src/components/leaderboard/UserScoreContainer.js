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
    return <img src={"https://www.argentum.org/wp-content/uploads/2018/12/blank-profile-picture-973460_6404.png"}
                style={tempImgSize}/>

}

class UserScoreContainer extends Component {

    render() {
        console.log("USERCONTAINER", this.props)
        let createdCount = this.props.users[this.props.user].questions.length
        let answeredCount = Object.keys(this.props.users[this.props.user].answers).length

        return(
        <div>
            <div>USERSCORECONTAINER</div>
            <div>{this.props.users[this.props.user].name}</div>
            <AnsweredQuestions  answeredCount={answeredCount}/>
            <CreatedQuestions  createdCount={createdCount}/>
            <TotalScore totalscore = {createdCount + answeredCount}/>
            <UserProfileImage />


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