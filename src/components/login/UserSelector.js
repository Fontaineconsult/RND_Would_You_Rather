import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserSelector extends Component {

    constructor(props){
        super(props)
        this.state = {
            selectedUser: ''
        }

    }

    componentDidMount(){

        console.log("USERS", this.props)

    }


    render (){

        return(

            <div>
                <form>
                    <select>
                        <option value='Farts'>Farts</option>
                    </select>

                </form>

            </div>

        )

    }

}


function mapStateToProps( {users} ) {

    return {users}

}



export default connect(mapStateToProps)(UserSelector)