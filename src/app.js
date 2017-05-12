/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import {
    DrawerNavigator,
    DrawerItems,
    DrawerView,
    StackNavigator,
    TabNavigator
} from 'react-navigation';

import { HomeScreen } from "./HomeScreen";
import { SettingsScreen } from "./SettingsScreen";
import { DetailsScreen1 } from "./DetailsScreen1";
import { DetailsScreen2 } from "./DetailsScreen2";
import { LoginUserScreen } from "./LoginUserScreen";

import * as css from "./Styles";
import { Icon } from "react-native-elements";

//
// tabs
//

const nav_tab = TabNavigator(
    // route config
    {
        DetailsRoute1: { screen: DetailsScreen1 },
        DetailsRoute2: { screen: DetailsScreen2 },
    },
    // navigator config
    {
        lazy: true, // render the tabs lazily
        tabBarPosition: 'bottom', // where are the tabs shown
        backBehavior: 'none', // back button doesn't take you to the initial tab
        tabBarOptions: css.tabs
    },
);


//
// stack
//

class TitleAndIcon extends Component {
  render() {
    return (
    <View style={css.header.container}>
        <Text style={css.header.text}>Doctor App</Text>
    </View>
    )
  }
}

class MenuIcon extends Component {
  render() {
    return (
    <View style={css.header.right_header}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerOpen')} underlayColor="transparent">
            <Icon name="dehaze" color='white' />
        </TouchableOpacity>
    </View>
    )
  }
}

const nav_stack = StackNavigator(
    // route config
    {
        HomeRoute: { screen: HomeScreen }, // this is displayed first
        LoginRoute: { screen: LoginUserScreen },
        DetailsRoute: { screen: nav_tab },
    },
    // navigator config
    {
        //headerMode: 'none', // this removes the navigation header
        initialRouteName: 'HomeRoute',
        navigationOptions: ({ navigation }) => {
            return {
                // label text
                headerTitle: <TitleAndIcon navigation={navigation} />,
                // other styling
                ...css.header,
                headerRight: <MenuIcon navigation={navigation} />,
            }
        }
    }
);


//
// drawer ... more info https://goo.gl/2Dnmtl
//

const customComponent = (props) => (
    <ScrollView
        style={{
            flex: 1,
            backgroundColor: css.drawer.style.backgroundColor,
        }}>
        <DrawerItems {...props} />
    </ScrollView>
);

const NavDrawer = DrawerNavigator(
    // route config
    {
        HomePageRoute: {
            screen: nav_stack,
            navigationOptions: {
                drawerLabel: 'Main App',
                drawerIcon: ({ tintColor }) => <Icon name="wb-sunny" color={tintColor} />,
            }
        },
        SettingsRoute: {
            screen: SettingsScreen,
            navigationOptions: {
                drawerLabel: 'Settings',
                drawerIcon: ({ tintColor }) => <Icon name="settings" color={tintColor} />,
            }
        },
    },
    // navigator config
    {
        //contentComponent: <CustomComponentW />,
        //contentComponent: props => <ScrollView><DrawerItems {...props} /></ScrollView>,
        contentComponent: customComponent,
        drawerPosition: 'left',
        // styling for for DrawerView.Items in contentOptions
        contentOptions: css.drawer,
        backBehavior: 'initialRoute',
        initialRouteName: 'HomePageRoute'
    }
);

export default NavDrawer



/*class Weather extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
        </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
        </Text>
                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload,{'\n'}
                    Shake or press menu button for dev menu
        </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});*/