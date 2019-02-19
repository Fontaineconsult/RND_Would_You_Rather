import React, { Component } from 'react'
import NewQuestionSubmitForm from "./NewQuestionSubmitForm"


class NewQuestionContainer extends Component {

    render () {
        return(
            <div>

                <div>Would you Rather</div>
                <NewQuestionSubmitForm/>
            </div>
        )
    }

}

export default NewQuestionContainer;