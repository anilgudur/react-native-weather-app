import React, { Component } from 'react';
import {
    Text,
    View,
    ActivityIndicator
} from 'react-native';

//import { LoginUserScreen } from "./LoginUserScreen";
import userAuthService from "./UserAuthService";

import * as css from "../Styles";

export class SignOutUserScreenComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            checkingSignOut: true,
            isSignOut: false
        }

        this.handleOnSignOut = this.handleOnSignOut.bind(this);
    }

    componentDidMount() {
        userAuthService.signOut((err, result) => {
            if (err) {
                console.log("err ==>>");
                console.log(err);
            } else {
                this.setState({
                    checkingSignOut: false
                });
                this.handleOnSignOut();
            }
        });

            // userAuthService.getAuthInfo((err, authInfo) => {
            //     this.setState({
            //         checkingSignOut: false,
            //         //isMounted: true,
            //         isSignOut: authInfo != null
            //     });
            // });

            // const { navigate } = this.props.navigation;
            // navigate('FeedAndSearchTabRoute', {param1: "Anil"});
    }

    // componentWillMount(){
    //     this.setState({isMounted: true});
    // }

    // componentWillUnmount(){
    //     this.setState({isMounted: false})
    // }

    handleOnSignOut() {
        console.log("Successfully logged out, can show different view.");
        this.setState({
            isSignOut: true
        });

        const { navigate } = this.props.navigation;
        navigate('HomeRoute', {param1: "Successfully logged out!"});
    }

    render() {

        const { navigate } = this.props.navigation;

        if (this.state.checkingSignOut) {
            return (
                <View style={[css.global.loading]}>
                    <ActivityIndicator
                        animating
                        size="large"
                    />
                </View>
            )
        }

        if (this.state.isSignOut) {
            //console.log('navigate');
            //console.log(navigate);
            //navigate('FeedAndSearchTabRoute', {param1: "Anil"});
            /*return (
                <View>
                    <Text>Logged in</Text>
                </View>
            )*/
            return (
                <View />
            )
        } else {
            return (
                <View />
                // <LoginUserScreen handleOnLogin={this.handleOnLogin} />
            )
        }
    }
}