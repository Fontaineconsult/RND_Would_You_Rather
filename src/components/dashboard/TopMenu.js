import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link, Redirect} from "react-router-dom";

class TopMenu extends Component {

    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this)
    }

    logout(event) {



    }


    render() {

       return(
           <div className="TopMenu">
               <div className="NavButtons">
                   <div><Link to={{pathname: "/"}}>Home</Link></div>
                   <div><Link to={{pathname: "/add"}}>New Question</Link></div>
                   <div><Link to={{pathname: "/leaderboard"}}>Leader Board</Link></div>


               </div>

               <div className="UserNameDisplay">

                   <div className="UserName">
                       <div>Name Display:</div>
                       {Object.keys(this.props.activeUser).length > 0 && (<div>{this.props.activeUser.activeUserName}</div>)}
                       {Object.keys(this.props.activeUser).length === 0 && (<div>Not Logged In</div>)}
                   </div>
               </div>

                <div className='LoginContainer'>
               {this.props.loggedIn === false && ( <div><Link to={{pathname: "/login"}}>Login</Link></div>)}
                    {this.props.loggedIn === true && ( <div><Link to={{pathname: "/logout"}}>Logout</Link></div>)}
                </div>
           </div>


       )

   }

}


function mapStateToProps({ activeUser }) {
    let loggedIn = Object.keys(activeUser).length > 0;

    return { activeUser, loggedIn }
}

export default connect(mapStateToProps)(TopMenu);