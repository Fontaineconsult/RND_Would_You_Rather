import React, { Component } from 'react'



class AnsweredQuestions extends Component {

    render(){

        return(
            <div>Answered Questions {this.props.answeredCount}</div>

        )

    }

}

export default AnsweredQuestions;