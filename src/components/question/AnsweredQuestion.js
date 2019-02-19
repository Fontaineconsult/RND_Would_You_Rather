import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";


function TallyBar (props) {

    return(

        <div>
            {props.tally === 1 && (<div>{props.tally} person voted for this</div>)}
            {props.tally !== 1 && (<div>{props.tally} people voted for this</div>)}
            <Progress percent={props.percent}/>
        </div>

    )


}


class AnsweredQuestion extends Component {


    render() {
        console.log("SELFVOTE", this.props.selfVoted)
        return (
            <div>

                Results

                Option One {this.props.question_id.optionOne.text}

                {this.props.selfVoted === 'optionOne' && (<b>You Voted</b>)}
                <TallyBar percent={this.props.optionOnePercent} tally={this.props.optionOneTally}/>

                Option Two {this.props.question_id.optionTwo.text}

                {this.props.selfVoted === 'optionTwo' && (<b>You Voted</b>)}
                <TallyBar percent={this.props.optionTwoPercent} tally={this.props.optionTwoTally}/>

            </div>


            )



    }




}


function mapStateToProps({questions, activeUser, users }, question_id) {


    let optionOneTally = 0;
    let optionTwoTally = 0;

    console.log(question_id)

    let selfVoted = users[activeUser.activeUserId].answers[question_id.question_id.id];
    console.log(selfVoted)

    Object.keys(users).forEach(function (user) {

        if (question_id.question_id.id in users[user].answers) {

            if (users[user].answers[question_id.question_id.id] === 'optionOne') {
                optionOneTally++

            } else {
                optionTwoTally++
            }


        }
    });

    let optionOnePercent = optionOneTally / (optionOneTally + optionTwoTally) * 100;
    let optionTwoPercent = optionTwoTally / (optionOneTally + optionTwoTally) * 100;

    return({questions, activeUser, optionOneTally, optionTwoTally, optionOnePercent, optionTwoPercent, selfVoted})

}


export default connect(mapStateToProps)(AnsweredQuestion)