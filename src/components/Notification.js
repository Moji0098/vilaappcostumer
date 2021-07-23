import React, { Component } from 'react';
import { Text, View, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const Notification = (props) => (
    <TouchableOpacity
        style={[styles.Notification, { backgroundColor: props.bgColor }]}
        activeOpacity={.8}
        onPress={props.navigate}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }} >
            <View style={{ flexDirection: 'column', }} >
                <Text style={{
                    fontFamily: 'ISMedium',
                    color: props.titleColor,
                    fontSize: 14,
                    marginRight: 10,
                }}>{props.title}</Text>
                <Text style={{
                    fontFamily: 'ISMedium',
                    color: props.titleColor,
                    fontSize: 10,
                    marginRight: 10
                }}>{props.description}</Text>
            </View>
            <View style={{
                backgroundColor: '#ddd',
                width: 50,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10
            }} >
                <Icon name={props.icon} size={30} color={props.iconColor} />
            </View>

        </View>
        <TouchableOpacity
            style={{ position: "absolute", top: 2, left: 2 }}
            activeOpacity={.5}
            onPress={props.deleteNotification}>
            <Icon  name="close" size={30} color="#ddd" />
        </TouchableOpacity>
    </TouchableOpacity>
)


export default Notification;


const styles = ({
    Notification: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '90%',
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 15,
        marginBottom: 15,
        zIndex: 2,
        overflow: 'hidden',
        paddingHorizontal: 5,
    },

})




    // <ResultRequest bgColor ="#eee"
    //                 icon = "map-marker"
    //                 iconColor = "red"
    //                 titleColor = "blue"
    //                  title="ویلای لوکس محمودآباد"
    //                  description="درخواست شما پذیرفته شد"
    //                    navigate={this._navigate}
    //                  deleteNotification={this._deleteNotification}
    // />

