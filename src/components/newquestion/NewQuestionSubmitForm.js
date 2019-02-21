import React, { Component } from 'react'
import { dispatchNewQuestion } from '../../actions/shared'
import { registerQuestion } from "../../actions/users";
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

class NewQuestionSubmitForm extends Component {


    constructor(props){
        super(props);

        this.state = {
            question1: "",
            question2: ""
        };
        this.updateInput = this.updateInput.bind(this)
        this.submitQuestions = this.submitQuestions.bind(this)
    }


    updateInput(event) {

        event.target.name === "Question1" && (
            this.setState({
                question1: event.target.value

            })
        );

        event.target.name === "Question2" && (
            this.setState({
                question2: event.target.value

            }
        ))

    }

    submitQuestions(event) {
        event.preventDefault();


        this.props.dispatch(dispatchNewQuestion({activeUser: this.props.activeUser.activeUserId, optionOne: this.state.question1, optionTwo: this.state.question2 }));
        this.props.history.push("/")

    }


    render () {
        return(
            <div className="newQuestionSubmitFormContainer">

               <form className="newQuestionSubmitForm" onSubmit={this.submitQuestions}>
                   <input type='text' name="Question1" placeholder="Question1" onChange={this.updateInput}/>
                   <input type='text' name="Question2" placeholder="Question1" onChange={this.updateInput}/>
                   <input type='Submit' name="Submit"/>
               </form>

            </div>


        )




    }



}

function mapStateToProps( {users, activeUser, questions} ) {

    return {users, activeUser, questions}

    }


export default withRouter(connect(mapStateToProps)(NewQuestionSubmitForm));