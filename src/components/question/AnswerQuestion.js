import React, { Component } from 'react'
import { dispatchAnswer } from '../../actions/shared'
import { connect } from 'react-redux'

class AnswerQuestion extends Component {

    constructor(props){
        super(props);
        this.state = {
            checked: ''
        };
        this.updateChecked = this.updateChecked.bind(this);
        this.submitAnswer = this.submitAnswer.bind(this);

    }


    updateChecked(event){
        this.setState({
            checked:event.target.value

        })
    }

    submitAnswer(event){
        event.preventDefault()
        console.log("submitting")
        this.props.dispatch(dispatchAnswer(this.props.question_id, this.state, this.props.activeUser))



    }


    render () {
        console.log("QUESTION", this.props)



        return(
            <div>
                <b>singleQuestion</b>

                <form onSubmit={this.submitAnswer}>
                    <label htmlFor="optionOne">{this.props.question_id.optionOne.text}</label>
                    <input type="radio" id="optionOne" value="optionOne" name="optionOne" checked={this.state.checked === "optionOne"} onChange={this.updateChecked}/>

                    <label htmlFor="optionTwo">{this.props.question_id.optionTwo.text}</label>
                    <input type="radio" id="optionTwo" value="optionTwo" name="optionTwo" checked={this.state.checked === "optionTwo"} onChange={this.updateChecked}/>
                    <input type="submit" name="submit choice"/>


                </form>
            </div>
        )

    }

}




function mapStateToProps({questions, activeUser }) {

    return({questions, activeUser  })

}


export default connect(mapStateToProps)(AnswerQuestion);