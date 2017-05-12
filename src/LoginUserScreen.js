'use strict';

import React, { Component } from 'react';
import {
    StyleSheet, Text, View,
    StatusBar, Image, TextInput, TouchableOpacity, ActivityIndicator
} from 'react-native';
import {Button, Icon} from "react-native-elements";
import * as css from "./Styles";

export class LoginUserScreen extends Component {

    constructor(props) {
        super(props);

        this.state ={
            loading: false
        }

        this.handleOnLoginPressed = this.handleOnLoginPressed.bind(this);
    }

    handleOnLoginPressed() {
        console.log("Attempting to login with username: " + this.state.username);
        this.setState({loading: true});

        fetch("https://api.github.com/search/repositories?q=react")
        .then((response) => {
            return response.json();
        })
        .then((results) => {
            console.log(results);
            this.setState({loading: false});
        })
    }

    render() {
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

                {   
                    this.state.loading && 
                    <View style={css.global.loading}>
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