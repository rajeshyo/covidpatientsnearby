import React, { Component } from 'react'
import Home from './Home'
import "../App.css";
import "../js/main"
import bg from "../img/bg.svg";
import avatar from "../img/avatar.svg";
import wave from "../img/wave.png";

export default class Signup extends Component {
    render() {
        return (
            <div>
                {/* <Home /> */}
                <img class="wave" src={wave} />
                <div class="container1">
                    <div class="img">
                        <img src={bg} />
                    </div>
                    <div class="login-content">
                        <form action="index.html">
                            <img src={avatar} />
                            <h2 class="title">Welcome</h2>
                            <div class="input-div one">
                                <div class="i">
                                    <i class="fas fa-user"></i>
                                </div>
                                <div class="div">
                                    <h5>Username</h5>
                                    <input type="text" class="input" />
                                </div>
                            </div>
                            <div class="input-div pass">
                                <div class="i">
                                    <i class="fas fa-lock"></i>
                                </div>
                                <div class="div">
                                    <h5>Password</h5>
                                    <input type="password" class="input" />
                                </div>
                            </div>
                            <a href="#">Forgot Password?</a>
                            <input type="submit" class="btn" value="Sign Up" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
