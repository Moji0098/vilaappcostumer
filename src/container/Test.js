import { View, Text, Dimensions , StatusBar } from 'react-native';
import React, { Component } from 'react';
import { IndicatorViewPager, PagerTitleIndicator } from 'rn-viewpager';

export default class Test extends Component {



  render() {
    return (
      <View style={{ height: Dimensions.get('screen').height, backgroundColor: 'deeppink' }}>
        <View style={{ height: Dimensions.get('window').height -25, backgroundColor: 'pink' }}>
        </View>

      </View >
    );
  }





}