import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper'
//const { width } = Dimensions.get('window')

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
    width: 240,
    height: 150,
    //flex: 1
  }
}

export class IntroScreen extends Component {
  render () {
    return (
      <View>

        {/*
          dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
          activeDot={<View style={{backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
        */}

        <Swiper style={styles.wrapper} height={300}
          onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
          dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
          activeDot={<View style={{backgroundColor: '#000', width: 10, height: 10, borderRadius: 6, marginLeft: 6, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
          paginationStyle={{
            alignItems: 'center',
            //bottom: 5, left: null, right: 10
          }} loop>
          <View style={styles.slide} title={<Text style={{color:'#000000'}}>Aussie tourist dies at Bali hotel</Text>}>
            <Image style={styles.image} source={require('../images/app/child-parent-patient.jpg')} />
            <Text style={{color:'#000000'}}>Anil text here..</Text>
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1}>Big lie behind Nine’s new show</Text>}>
            <Image style={styles.image} source={require('../images/app/doctors-list.png')} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1}>Why Stone split from Garfield</Text>}>
            <Image style={styles.image} source={require('../images/app/pharmacy-map.png')} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1}>Learn from Kim K to land that job</Text>}>
            <Image style={styles.image} source={require('../images/app/child-patient.jpg')} />
          </View>
        </Swiper>

        <View>
            <View>
                <Text style={{top:-50}}>Sign In</Text>
            </View>
            <View>
                <Text style={{top:-50}}>Sign Up</Text>
            </View>
        </View>

      </View>
    )
  }
}
