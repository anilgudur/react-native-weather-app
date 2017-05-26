
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import * as css from "../Styles";

export class IntroFooter extends Component {
  render() {

    const { filter } = this.props;

    return (
      <View style={css.intro_screen.footer_container}>
            <TouchableOpacity style={css.intro_screen.footer_touchable_opacity}>
                <Text style={[css.intro_screen.footer_link, css.intro_screen.footer_link_signin]}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={css.intro_screen.footer_touchable_opacity}>
                <Text style={[css.intro_screen.footer_link, css.intro_screen.footer_link_signup]}>Sign Up</Text>
            </TouchableOpacity>
      </View>
    );
  }
}
