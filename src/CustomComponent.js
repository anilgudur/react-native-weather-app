import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,

    TouchableOpacity,
    Button,
    ScrollView
} from 'react-native';
import {
    DrawerView
} from 'react-navigation';

import * as css from "./Styles";

/*const CustomComponentW = ({ props }) => (
        <ScrollView
            style={{
            flex: 1,
            backgroundColor: css.drawer.style.backgroundColor,
            }}>
            <DrawerView.Items {...props} />
        </ScrollView>
);*/
export default class CustomComponentW extends Component {
  render() {
    return (
        <ScrollView
            style={{
            flex: 1,
            backgroundColor: css.drawer.style.backgroundColor,
            }}>
            <DrawerItems {...props} />
        </ScrollView>
    );
  }
}

// CustomComponentW.propTypes = {
//   navigation: React.PropTypes.object.isRequired,
// };

//export default CustomComponentW;