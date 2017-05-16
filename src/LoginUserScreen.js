'use strict';

import React, { Component } from 'react';
import {
    StyleSheet, Text, View,
    StatusBar, Image, TextInput, TouchableOpacity, ActivityIndicator
} from 'react-native';
import {Button, Icon} from "react-native-elements";
import * as css from "./Styles";

//import { UserAuthService } from "./services/UserAuthService";

//import buffer from 'buffer';

export class LoginUserScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false
        }

        this.handleOnLoginPressed = this.handleOnLoginPressed.bind(this);
    }

    handleOnLoginPressed() {
        console.log("Attempting to login with username: " + this.state.username);
        this.setState({loading: true});

        var userAuthService = require("./services/UserAuthService");

        userAuthService.login({
            username: this.state.username, 
            password: this.state.password
        }, (results) => {
            this.setState(results);

            // if (results.success) {
            //     console.log(results.success);
            // }
            if (results.success && this.props.handleOnLogin) {
                this.props.handleOnLogin();
            }
        });
        //     this.setState(Object.assign({loading: false}, results));

        /*
        //
        // Start: Login serive
        //
        var b = new buffer.Buffer(this.state.username + ':'+ this.state.password);
        var encodedAuth = b.toString('base64');

        // fetch("https://api.github.com/search/repositories?q=react")
        fetch("https://api.github.com/user", {
            headers: {
                'Authorization' : 'Basic ' + encodedAuth
            }
        })
        .then((response) => {
            if (response.status >= 200 && response.status < 300) {
                return response;
            }

            // if (response.status == 401) {
            //     throw "Bad credentials";
            // }
            // throw "Unknown error";
            throw {
                badCredentials: response.status == 401,
                unknownError: response.status != 401
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((results) => {
            console.log(results);
            this.setState({loading: false, success: true});
        })
        .catch((err) => {
            //console.log('Logon failed: '+err);
            this.setState(err);
        })
        .finally(() => {
            this.setState({loading:false});
        })
        //
        // End: Login serive
        //
        */

    }

    render() {

        var errorCtrl = <View />
        if (!this.state.success && this.state.badCredentials) {
            errorCtrl = <Text style={css.global.error}>
                That username and password combination did not work.
            </Text>;
        }
        if (!this.state.success && this.state.unknownError) {
            errorCtrl = <Text style={css.global.error}>
                We experienced an unexpected issue.
            </Text>;
        }

        return (
            <View style={css.login_screen.container}>

                <StatusBar 
                    hidden={false}
                    translucent={false}
                    animated={true}
                    barStyle={'light-content'}
                    backgroundColor={css.colors.background_dark}
                />

                <Image 
                    style={css.login_screen.logo} 
                    source={require('./images/Octocat.png')}
                />
                <Text style={css.login_screen.heading}>
                    Github browser
                </Text>
                <TextInput style={css.global.input} placeholder="Github username" underlineColorAndroid="transparent" 
                    onChangeText={(text) => this.setState({username:text})}
                />
                <TextInput style={css.global.input} placeholder="Github password" underlineColorAndroid="transparent" secureTextEntry={true} 
                    onChangeText={(text) => this.setState({password:text})}
                />

                <TouchableOpacity style={css.login_screen.button} 
                    onPress={this.handleOnLoginPressed}
                >
                    <Text style={css.login_screen.buttonText}>Log in</Text>
                </TouchableOpacity>

                {errorCtrl}

                {   
                    this.state.loading && 
                    <View style={[css.global.loading,css.login_screen.loading]}>
                        <ActivityIndicator 
                            animating
                            size="large"
                        />
                    </View>
                }

            </View>
        );
    }
}