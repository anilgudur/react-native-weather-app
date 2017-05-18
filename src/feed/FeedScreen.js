// @flow

import React, { Component } from "react";
import { Text, View, ListView, ActivityIndicator, Image } from "react-native";
import * as css from "../Styles";

import moment from "moment";

const userAuthKey = 'userAuthVal';
const userResultKey = 'userResultVal';

export class FeedScreen extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            dataSource: ds.cloneWithRows(['A','B','C']),
            loading: true
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

    getRowTitle(item) {
        item = (item === 'pushed_at') ? item.replace('_', ' ') : item;
        return item[0] ? item[0].toUpperCase() + item.slice(1) : item;
    }

    renderRow(rowData) {
        var topicArr = ['name', 'description', 'language', 'created_at', 'pushed_at'];
        var list = topicArr.map((item, index) => {
            if (!rowData[item]) {
                 return <View key={index} />;
            } else {
                return (
                    <Text key={index}>
                        {this.getRowTitle(item)}: {
                            item == 'created_at' ? moment(rowData[item]).fromNow() : (item == 'name' ? (<Text style={css.feed_screen.created_at}>{rowData[item]}</Text>) : rowData[item])
                        }
                    </Text>
                );
            }
        });
        return (
            <View style={css.feed_screen.render_row}>
                {
                    rowData['owner'] != undefined && rowData['owner'].avatar_url != undefined && 
                    <Image source={{uri: rowData['owner'].avatar_url}} style={css.feed_screen.avatar_image} />
                }
                <View style={css.feed_screen.text_container}>
                    {list}
                </View>
            </View>
        );
    }

    fetchFeed() {
        const userAuthService = require("../login/UserAuthService");
        userAuthService.getAuthInfo((err, authInfo) => {

            if (err == null) {
                console.log("authInfo");
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
                        dataSource: this.state.dataSource.cloneWithRows(feedItems),
                        loading: false
                    })
                })
            } {
                    this.setState({
                        loading: false
                    })
            }
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
                    renderSeparator={(sectionId, rowId) => {
                        return <View key={rowId} style={css.feed_screen.separator} />
                    }}
                />
                <Text style={css.global.title}>{msg1}</Text>
                <Text style={css.global.body1}>{params.param1}</Text>

                {   
                    this.state.loading && 
                    <View style={[css.global.loading]}>
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