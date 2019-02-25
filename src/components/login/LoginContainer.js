import React, { Component } from 'react'
import UserSelector from "./UserSelector"


class LoginContainer extends Component {

    render () {
        return(
            <div className="loginContainer">
                <div className="loginContainerTop">
                    <div className="loginContainerTitleTop">
                        Welcome to the React ND Project 2 App
                    </div>
                    <div className="loginContainerTitleBottom">
                        Would you Rather
                    </div>
                </div>
                <div className="loginContainerBottom">
                    <div className="loginContainerBodyTop">Sign In</div>
                    <div className="loginContainerBodyBottom">
                        <UserSelector/>
                    </div>
                </div>
            </div>

        )

    }

}

export default LoginContainer;