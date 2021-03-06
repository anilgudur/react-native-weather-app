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

    componentDidMount() {
console.log("Checking");
        userAuthService.getAuthInfo((err, authInfo) => {
            if (err == null) {
                this.setState({
                    checkingAuth: false,
                    //isMounted: true,
                    isLoggedIn: authInfo != null
                });
                if (authInfo != null) {
                    const { navigate } = this.props.navigation;
                    navigate('FeedAndSearchTabRoute', {param1: "Anil"});
                }
            } else {
                console.log("err");
                console.log(err);
                this.setState({
                    checkingAuth: false,
                    isLoggedIn: false
                });
            }
        });

        // call navigate for AppNavigator here:
        //this.navigator && this.navigator.dispatch({ type: 'Navigate', routeName: 'FeedAndSearchTabRoute', params: {} });

        if (this.state.isLoggedIn) {
            const { navigate } = this.props.navigation;
            navigate('FeedAndSearchTabRoute', {param1: "Anil"});
        }
console.log("this.state.isLoggedIn ====>>>>");
console.log(this.state.isLoggedIn);
        // const navigateAction = NavigationActions.navigate({
        //     routeName: 'FeedAndSearchTabRoute',
        //     params: {},
        //     //action: NavigationActions.navigate({ routeName: 'SubProfileRoute' })
        // })
        // this.props.navigation.dispatch(navigateAction)
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
        this.setState({ isLoggedIn: true });
        //}

        const { navigate } = this.props.navigation;
        navigate('FeedAndSearchTabRoute', {param1: "Anil"});
    }

    render() {

        const { navigate } = this.props.navigation;

        if (this.state.checkingAuth) {
            return (
                <View style={[css.global.loading]}>
                    <ActivityIndicator
                        animating
                        size="large"
                    />
                </View>
            )
        } else if (this.state.isLoggedIn) {
            return (
                <View>
                    <Text>Hi</Text>
                </View>
            )
        } else {
            return (
                <LoginUserScreen handleOnLogin={this.handleOnLogin} />
            )
        }
    }
}