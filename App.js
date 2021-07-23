

import React , {Component} from 'react';

import { View ,Dimensions, NativeModules } from 'react-native'

import Routes from './Routes';


const { NavigationBarColor } = NativeModules;

export default class App extends Component {
  constructor(props) {
    super(props);
  
  }


  render() {

    return (

      <View style={{height: Dimensions.get('window').height + 100}}>
          <Routes />
      </View>
        
    );
  }
}
