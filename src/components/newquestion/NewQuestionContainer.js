import React, { Component } from 'react'
import NewQuestionSubmitForm from "./NewQuestionSubmitForm"


class NewQuestionContainer extends Component {

    render () {
        return(
            <div className="newQuestionContainer">

                <div className="newQuestionContainerHeaderTop">Complete the question</div>
                <div className="newQuestionContainerHeaderBottom">Would you rather</div>
                <NewQuestionSubmitForm/>
            </div>
        )
    }

}

export default NewQuestionContainer;