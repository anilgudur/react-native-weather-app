// @flow

import React, { Component } from "react";
import { Text, View, ListView } from "react-native";
import * as css from "../Styles";

const userAuthKey = 'userAuthVal';
const userResultKey = 'userResultVal';

export class FeedScreen extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            dataSource: ds.cloneWithRows(['A','B','C'])
        }

        this.renderRow = this.renderRow.bind(this);
        this.fetchFeed = this.fetchFeed.bind(this);
    }

    componentDidMount() {
        this.fetchFeed();
    }

    static navigationOptions = {
        title: `Feed Screen`,
    };

    renderRow(rowData) {
        var topicArr = ['description', 'location', 'followers', 'following', 'email', 'bio', 'public_repos'];
        var list = topicArr.map((item, index) => {
            if (!rowData[item]) {
                 return <View key={index} />;
            } else {
                return (
                    <View key={index}>
                            <Text>{item}</Text>
                            <Text>{rowData[item]}</Text>
                    </View>
                );
            }
        });
        return <View>{list}</View>;
    }

    fetchFeed() {
        const userAuthService = require("../login/UserAuthService");
        userAuthService.getAuthInfo((err, authInfo) => {
            console.log(authInfo);
            var url = 'https://api.github.com/users/'
                    + authInfo[userResultKey].login
                    + '/repos';
            fetch(url, {
                header: authInfo.header
            })
            .then((response) => response.json())
            .then((responseData) => {
                console.log('events');
                console.log(responseData);
                //var feedItems = responseData.filter((ev) => ev.type == 'PushEvent');
                var feedItems = responseData;
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(feedItems)
                })
            })
        });
    }

    render() {
        const msg1 = `Feed Details`;

        const { params } = this.props.navigation.state;

        return (
            <View style={css.global.v_container}>
                <ListView 
                    dataSource={this.state.dataSource} 
                    renderRow={this.renderRow} 
                />
                <Text style={css.global.title}>{msg1}</Text>
                <Text style={css.global.body1}>{params.param1}</Text>
            </View>
        );
    }

}