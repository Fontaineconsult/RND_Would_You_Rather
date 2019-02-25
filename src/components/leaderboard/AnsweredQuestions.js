import React, { Component } from 'react'



class AnsweredQuestions extends Component {

    render(){
        return(
            <div className="leaderBoardQuestion">Answered Questions:  {this.props.answeredCount}</div>
        )
    }

}

export default AnsweredQuestions;