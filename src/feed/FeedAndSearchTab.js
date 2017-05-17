import React, { Component } from 'react';
import {
    TabNavigator
} from 'react-navigation';

import * as css from "../Styles";
import { Icon } from "react-native-elements";

import { FeedScreen } from "./FeedScreen";
import { SearchFeedScreen } from "./SearchFeedScreen";

//
// tabs
//

const FeedAndSearchTab = TabNavigator(
    // route config
    {
        FeedRoute: { screen: FeedScreen },
        SearchFeedRoute: { screen: SearchFeedScreen },
    },
    // navigator config
    {
        lazy: true, // render the tabs lazily
        tabBarPosition: 'bottom', // where are the tabs shown
        backBehavior: 'none', // back button doesn't take you to the initial tab
        tabBarOptions: css.tabs
    },
);

module.exports = FeedAndSearchTab;