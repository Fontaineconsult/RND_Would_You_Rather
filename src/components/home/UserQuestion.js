import { Link } from 'react-router-dom'
import React from 'react'
function Question(props) {

    let tempImgSize = {
        height: 30,
        width: 30

    };
    let link = "/question/" + props.answered
    let user = props.users[props.questions[props.answered].author].name
    return (
        <div className="questionSelection">
            <div className="userNameTop">{user} asks:</div>
            <div className="questionContent">
            <div className="questionSelectionLeft">

                <div className="questionSelectionLeftImage"><img alt="avatar" src={props.image} style={tempImgSize}/></div>
                <div className="questionSelectionLeftContent">
                    <div className="wouldYouRather">Would you rather</div>
                    <div className="questionToSelect">{props.questions[props.answered].optionOne.text}</div>
                    <div><i>or</i></div>
                    <div className="questionToSelect">{props.questions[props.answered].optionTwo.text}</div>
                </div>

            </div>
            <div className="questionSelectionRight">
                <Link to={{pathname: link}}>View Poll</Link>
            </div>
            </div>

        </div>
    )
}

export default Question