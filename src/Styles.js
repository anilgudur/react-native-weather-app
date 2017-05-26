// @flow

import React from "react";
import {StyleSheet} from "react-native";

export const colors = {
  "background_app": '#FFFFFF',
  "background_dark": '#00B9FF',
  "background_medium": '#b3c4cb',
  "background_light": '#d9e3f0',
  "button_bg": '#0693e3',
  "button_fg": '#d9e3f0',
  "text_light": '#d9d9d9',
  "text_medium": '#455a64',
  "text_dark": '#263238',
  "border_color": "#48bbec"
};

export const values = {
  "font_title": 'NotoSans-Bold',
  "font_body": 'NotoSans-Regular',
  "font_body_size": 14,
  "font_title_size": 20,
  'border_radius': 2,
};

export const global = StyleSheet.create(
  {
    v_container: {
      flex: 1,
      padding: 8,
      flexDirection: 'column', // main axis
      justifyContent: 'center', // main axis
      alignItems: 'center', // cross axis
      backgroundColor: colors.background_app,
    },
    title: {
      flex: -1, // shrink to min height & width if needed
      marginTop: 8,
      marginLeft: 8,
      marginRight: 8,
      marginBottom: 4,
      fontSize: values.font_title_size,
      color: colors.text_dark,
      fontFamily: values.font_title, // more info https://goo.gl/7wYazn
    },
    body1: {
      flex: -1,
      marginTop: 4,
      marginLeft: 8,
      marginRight: 8,
      marginBottom: 8,
      fontFamily: values.font_body, // more info https://goo.gl/7wYazn
      fontSize: values.font_body_size,
      color: colors.text_medium,
    },
    h_container: {
      flex: -1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignSelf: 'stretch', // overrides container alignItems
      backgroundColor: colors.background_medium,
      padding: 16,
    },
    icon: {
      flex: -1,
      margin: 8,
      height: 100,
      width: 75,
      resizeMode: 'contain', //'cover' | 'contain'
    },
    input: {
        //flex: -1, // shrink to min height & width if needed
        alignSelf: 'stretch', // overrides container alignItems
        height: 50,
        marginTop: 10,
        padding: 4,
        fontSize: 18,
        borderWidth: 1,
        borderColor: colors.border_color,
    }, 
    loading: {
        position: "absolute", left: 0, top: 0, right: 0, bottom: 0, alignItems: "center", justifyContent: "center", 
        backgroundColor: "rgba(0,0,0,.2)"
    },
    error: {
        color: 'red',
        paddingTop: 10
    }
  });

// more info https://goo.gl/dqw4jF
export const header = {
  // background
  headerStyle: {
    backgroundColor: colors.background_dark,
  },
  // arrows
  headerTintColor: colors.text_light,
  // my own styles for titleAndIcon
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingLeft: 8,
    position: 'absolute',
    left: 0,
    right: 0,
  },
  right_header: {
      paddingRight: 8,
  },
  // my own styles for titleAndIcon
  text: {
    paddingLeft: 8,
    color: colors.text_light,
    fontFamily: values.font_body,
    fontSize: values.font_title_size,
  }

};

// more info https://goo.gl/eawcVg
export const tabs = {
  // text
  labelStyle: {
    fontFamily: values.font_body,
    fontSize: values.font_body_size,
  },
  activeTintColor: colors.text_dark, // text color active tab
  inactiveTintColor: colors.text_medium, // text color inactive tab
  indicatorStyle: {backgroundColor: colors.button_bg}, // active tab highlight top
  style: {
    backgroundColor: colors.background_medium, // background color of tabs
    borderTopColor: colors.background_light // active tab highlight bottom
  }
};

// styling for for DrawerView.Items in contentOptions
// more info - https://goo.gl/d74VUZ
export const drawer = {
    activeBackgroundColor: colors.background_medium,
    inactiveBackgroundColor: colors.background_dark,
    inactiveTintColor: colors.text_light, // text color for inactive drawer items
    activeTintColor: colors.text_dark, // text color for active drawer items
    // style object for text style
    labelStyle: {
      fontFamily: values.font_title,
      fontSize: values.font_title_size,
    },
    // style object for the content section
    style: {
      backgroundColor: colors.background_dark,
    },
  }
;

//
// Login
//

export const login_screen = {
    logo: {
        width: 66,
        height: 55
    },
    container: {
        flex: 1,
        paddingTop: 40,
        padding: 10,
        //flexDirection: 'row', // main axis
        // justifyContent: 'center', // main axis
        alignItems: 'center', // cross axis
        //backgroundColor: colors.text_light,
        //color: colors.text_dark
    },
    heading: {
        fontSize: 30,
        marginTop: 10,
    }, 
    button: {
        height: 50,
        backgroundColor: colors.background_dark,
        alignSelf: 'stretch',
        marginTop: 10,
        justifyContent: 'center'
    }, 
    buttonText: {
        fontSize: 22,
        color: '#FFF',
        alignSelf: 'center'
    },
    loading: {
        paddingTop: 100
    }
};

export const feed_screen = {
    render_row: {
        flex: 1,
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        // borderColor: colors.border_color,
        // borderBottomWidth: 1
    },
    avatar_image: {
        height: 36,
        width: 36,
        borderRadius: 18
    },
    text_container: {
        paddingLeft: 20
    },
    created_at: {
        fontWeight:"600"
    },
    separator: {
        borderWidth: 1,
        borderColor: colors.border_color
    }
};

export const intro_screen = {
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
        justifyContent: 'space-between', // main axis
    },
    slide_text: {
        color:'#676D75', padding:50, fontSize:20, fontWeight:'500'
    },

    footer_container: {
        padding: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: 'transparent'
    },
    footer_touchable_opacity: {
        padding: 8,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "transparent"
    },
    footer_link: {
        fontSize:22,
        fontWeight:'500',
        color:'#39414B'
    },
    footer_link_signin: {
        color:'#676D75'
    },
    footer_link_signup: {
        color:'#39414B'
    },


    v_container: {
      flex: 1,
      //padding: 8,
      flexDirection: 'column', // main axis
      justifyContent: 'space-between', // main axis
      alignItems: 'center', // cross axis
      //backgroundColor: colors.background_app,
      borderWidth:1,
      borderColor:'red',
      backgroundColor:'yellow'
    },
    swiper_parent_view: {
        flex: 1,
          //padding: 8,
      flexDirection: 'column', // main axis
      justifyContent: 'space-between', // main axis
      alignItems: 'center', // cross axis
      //backgroundColor: colors.background_app,
      borderWidth:1,
      borderColor:'blue',
      backgroundColor:'green',
    },
    sign_in_row: {
      //flex:1, flexDirection:'row', justifyContent:'flex-end', 
      backgroundColor:'blue'
    }
};