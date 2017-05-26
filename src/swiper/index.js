import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native'
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')
import {Icon} from "react-native-elements";
import * as css from "../Styles";

import {IntroFooter} from './IntroFooter'

const styles = {
  wrapper: {
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },

  image: {
    width,
    height: 150,
    flex: 1
  }
}

export class IntroScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filter: 'ALL',
            isClosed: false,
            introReachedLast: false
        }

        this.handleScrollEnd = this.handleScrollEnd.bind(this);
    }

    handleScrollEnd(e, state, context) {
        if (state.index === 3) {
            this.setState({
                introReachedLast: true
            });
        } else {
            this.setState({
                introReachedLast: false
            });
        }
        console.log('state:', state.index);
        console.log('introReachedLast:', this.state.introReachedLast);
    }

  render() {

    const {navigate} = this.props.navigation;

    return (

      <View style={css.intro_screen.container}>

        {/*<View style={css.intro_screen.swiper_parent_view}>*/}
          <Swiper style={styles.wrapper} height={500}
            onMomentumScrollEnd={this.handleScrollEnd} 
            dot={<View style={{ backgroundColor: 'rgba(0,0,0,.2)', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />} 
            activeDot={<View style={{ backgroundColor: '#000', width: 10, height: 10, borderRadius: 6, marginLeft: 6, marginRight: 3, marginTop: 3, marginBottom: 3 }} />} 
            paginationStyle={{
              //alignItems: 'center', bottom: 0,
              //position: "absolute", bottom: -50, alignItems: "center", justifyContent: "center", 
              //backgroundColor: "rgba(0,0,0,.2)"
              bottom: 0
            }} 
            loop>
            <View style={styles.slide}>
                <Image resizeMode='stretch' style={styles.image} source={require('../images/app/child-parent-patient.jpg')} />
                <Text style={css.intro_screen.slide_text}>
                    Doctor On A Call lets you see a doctor or psychologist from the comfort of your home.
                </Text>
                <Text> </Text>
            </View>
            <View style={styles.slide}>
                <Image resizeMode='stretch' style={styles.image} source={require('../images/app/doctors-list.png')} />
                <Text style={css.intro_screen.slide_text}>
                    Tell us your symptoms and we'll connect you to a board-certified doctor within minuites.
                </Text>
            </View>
            <View style={styles.slide}>
              <Image resizeMode='stretch' style={styles.image} source={require('../images/app/pharmacy-map.png')} />
              <Text style={css.intro_screen.slide_text}>
                  Your doctor will send prescriptions or refills to your preferred pharmacy.
              </Text>
            </View>
            <View style={styles.slide}>
              <Image resizeMode='stretch' style={styles.image} source={require('../images/app/child-patient.jpg')} />
              <Text style={css.intro_screen.slide_text}>
                  You get to skip the waiting room and feel better soon.
              </Text>
            </View>
          </Swiper>
        {/*</View>*/}

        <IntroFooter 
            filter={this.state.filter} 
        />

        {   
            this.state.introReachedLast && 
            <View style={{ position: "absolute", top: 0, right: 0, alignItems: "center", justifyContent: "center"
            //backgroundColor: "rgba(0,0,0,.2)" 
            }}>
                <Icon
                  onPress={() => navigate('LoginRoute', {param1: 'From Intro Slider'})}
                  //reverse
                  name='highlight-off'
                  //type="material-community"
                  color={css.colors.button_bg}
                  size={50}
                />
            </View>
        }

      </View>
    )
  }
}
