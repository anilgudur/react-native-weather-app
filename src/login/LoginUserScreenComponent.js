import React, { Component } from 'react';
import {
    Text,
    View,
    ActivityIndicator
} from 'react-native';

import { LoginUserScreen } from "./LoginUserScreen";
import userAuthService from "./UserAuthService";

import * as css from "../Styles";

export class LoginUserScreenComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
            //isMounted: false,
            checkingAuth: true
        }

        this.handleOnLogin = this.handleOnLogin.bind(this);
    }

    componentDidMount(){
        userAuthService.getAuthInfo((err, authInfo) => {
            this.setState({
                checkingAuth: false,
                //isMounted: true,
                isLoggedIn: authInfo != null
            });
        });
    }

    // componentWillMount(){
    //     this.setState({isMounted: true});
    // }

    // componentWillUnmount(){
    //     this.setState({isMounted: false})
    // }

    handleOnLogin() {
        console.log("Successfully logged in, can show different view.");
        //if (this.state.isMounted) {
            this.setState({isLoggedIn: true});
        //}
    }

    render() {
        if (this.state.checkingAuth) {
            return (
                <View style={[css.global.loading]}>
                    <ActivityIndicator 
                        animating
                        size="large"
                    />
                </View>
            )
        }

        if (this.state.isLoggedIn) {
            return (
                <View>
                    <Text>Logged in</Text>
                </View>
            )
        } else {
            return (
                <LoginUserScreen handleOnLogin={this.handleOnLogin} />
            )
        }
    }
}