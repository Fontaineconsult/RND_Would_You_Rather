import React, { Component } from 'react'
import { connect } from 'react-redux'

class TopMenu extends Component {

   render() {

       return(
           <div>
               <div>Home</div>
               <div>New Question</div>
               <div>Leader Board</div>
               <div>Name Display:
                   {Object.keys(this.props.activeUser).length > 0 && (<div>{this.props.activeUser.activeUserName}</div>)}
                   {Object.keys(this.props.activeUser).length === 0 && (<div>Not Logged In</div>)}
               </div>

               <div>Logout</div>
           </div>


       )

   }

}


function mapStateToProps({ activeUser }) {
    return { activeUser }
}

export default connect(mapStateToProps)(TopMenu);