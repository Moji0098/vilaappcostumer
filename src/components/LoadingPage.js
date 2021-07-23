import React from 'react';
import { Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';


const LoadingPage = () => (
    <View style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999,
        backgroundColor: 'rgba(0,0,0,.5)',
    }} >
        <View style={{
            width: 120,
            height:120,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius:10,
            backgroundColor:'#fff'
        }} >
            <ActivityIndicator style={{}} size="small" color="#A52D53" />
            <Text style={{
                fontFamily: 'IS',
                fontSize: 12,
                color: '#A52D53',
                marginTop:20
            }} >درحال بارگذاری  ...</Text>
        </View>

    </View>
)




export default LoadingPage;