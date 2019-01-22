import React, { Component } from 'react'
import { connect } from 'react-redux'



class UnansweredQuestionsContainer extends Component {

    render(){
        console.log("UNSAWNEREDED", this.props)
        return(
            <div>
                UNASWERED QUESTIONS

            </div>


        )

    }





}


function mapStateToProps({activeUser, users, questions}) {


    return {activeUser, users, questions}
}


export default connect(mapStateToProps)(UnansweredQuestionsContainer)