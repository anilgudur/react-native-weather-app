import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')
import * as css from "../Styles";

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
  render() {
    return (

      <View style={css.intro_screen.v_container}>

        <View style={css.intro_screen.swiper_parent_view}>
          <Swiper style={styles.wrapper} height={400}
            onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
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
              <Text style={{ color: '#000000' }}>Anil text here..</Text>
              <Text> </Text>
            </View>
            <View style={styles.slide}>
              <Image resizeMode='stretch' style={styles.image} source={require('../images/app/doctors-list.png')} />
            </View>
            <View style={styles.slide}>
              <Image resizeMode='stretch' style={styles.image} source={require('../images/app/pharmacy-map.png')} />
            </View>
            <View style={styles.slide}>
              <Image resizeMode='stretch' style={styles.image} source={require('../images/app/child-patient.jpg')} />
            </View>
          </Swiper>
        </View>

        <View>
            <View style={[css.intro_screen.sign_in_row]}>
              <View>
                <Text style={{ color:'black' }}>Sign In</Text>
              </View>
              <View>
                <Text style={{ color:'black' }}>Sign Up</Text>
              </View>
            </View>
        </View>

      </View>
    )
  }
}
