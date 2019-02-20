import React, { Component } from 'react'
import { connect } from 'react-redux'
import AnsweredQuestionsContainer from "./AnsweredQuestionsContainer"
import UnansweredQuestionsContainer from "./UnansweredQuestionsContainer"



class HomeViewContainer extends Component {

    constructor(props){
        super(props);

        this.state = {
            viewMode: 1
        };

        this.setAnsweredQuestions = this.setAnsweredQuestions.bind(this);
        this.setUnansweredQuestions = this.setUnansweredQuestions.bind(this)
    }

    setAnsweredQuestions(event){

        this.setState({
            viewMode: 0
        })
    }

    setUnansweredQuestions(event){

        this.setState({
            viewMode: 1
        })

    }

    render () {
        return(
            <div className="homeViewContainer">


                Home View

                {Object.keys(this.props.activeUser).length > 0 && (
                    <div className="questionsOuterContainer">

                        <div className="homeViewButtons">
                            <div className="homeViewButton" onClick={this.setAnsweredQuestions}>Answered Questions</div>
                            <div className="homeViewButton" onClick={this.setUnansweredQuestions}>Unanswered Questions</div>
                        </div>
                    <div className="homeViewContentContainer">
                    {this.state.viewMode === 0 &&  (<AnsweredQuestionsContainer/>)}
                    {this.state.viewMode === 1 &&  (<UnansweredQuestionsContainer unanswered={this.props.unansweredQuestions}/>)}
                    </div>
                    </div>
                )}


            </div>

            )

    }

}

function mapStateTopProps({ activeUser = null, users, questions }) {

    if ( Object.keys(activeUser).length > 0) {

        let unansweredQuestions = getUnansweredQuestions(Object.keys(questions), Object.keys(users[activeUser.activeUserId].answers));
        return { activeUser, users, questions, unansweredQuestions }
    }


    return { activeUser, users, questions }

}


function getUnansweredQuestions (allQuestions,answered) {
    return allQuestions.filter(o => !answered.find(o2 => o === o2))
}

export default connect(mapStateTopProps)(HomeViewContainer);