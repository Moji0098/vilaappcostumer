import React, { Component } from 'react';
import { Text, View, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TimerCutDown from './Timer'



const RequestItems = (props) => (
    <TouchableOpacity style={styles.RequestItems} activeOpacity={.8} onPress={props.navigate}>
        <View style={styles.details}>
            <View
                style={styles.gradient}>
                <Text style={styles.details_text}>نفر</Text>
                <Text style={[styles.details_text ,{color:'#ad3d53'}]}> {props.persons} </Text>
                <Text style={styles.details_text}>تعداد :</Text>
                <View style={styles.details_icons} >
                    <Icon name="account-group-outline" size={14} color="#636363" />
                </View>
            </View>
            <View
                style={styles.gradient}>
                <Text style={styles.details_text}> ت </Text>
                <Text style={[styles.details_text ,{color:'#ad3d53'}]}> {props.maxPrice} </Text>
                <Text style={styles.details_text}> تا </Text>
                <Text style={[styles.details_text ,{color:'#ad3d53'}]}> {props.minPrice} </Text>
                <Text style={styles.details_text}> از </Text>
                <View style={styles.details_icons} >
                    <Icon name="cash" size={14} color="#636363" />
                </View>
            </View>
            <View style={styles.gradient}>
                <Text style={[styles.details_text ,{color:'#ad3d53'}]}> 1398/06/20 </Text>
                <Text style={styles.details_text}> خروج :</Text>
                <Text style={[styles.details_text ,{color:'#ad3d53'}]}> {props.startTime} </Text>
                <Text style={styles.details_text}>ورود : </Text>
                <View style={styles.details_icons} >
                    <Icon name="calendar" size={14} color="#636363" />
                </View>
            </View>

        </View>
        <ImageBackground
            style={{
                resizeMode: 'cover',
                width: (Dimensions.get('window').width - 30) / 3.5 - 10,
                height: (Dimensions.get('window').width - 30) / 3.5 - 10,
                borderRadius: 100,
                backgroundColor: 'red',
                overflow: 'hidden',
                marginRight: 5
            }}
            source={require('./../../Assets/Images/detail.jpg')}
        >
            <View style={styles.image_child} >
                <View style={styles.location_box} >
                    <Text style={styles.location_text} > {props.city} </Text>
                    <Icon name="map-marker" size={14} color="#fff" />
                </View>

                <View>
                    <TimerCutDown
                        id={props.requestNumber}
                        afterEndOnChange={() => alert(0)}
                        until={43200}
                        labelText={{ color: '#fff', fontSize: 12, width: 25 }}
                    />
                </View>

            </View>

        </ImageBackground>




        <View style={{
            width: 0,
            height: 0,
            backgroundColor: 'transparent',
            borderStyle: 'solid',
            borderRightWidth: Dimensions.get('window').width / 3.5 + 20,
            borderTopWidth: Dimensions.get('window').width / 3.5 + 20,
            borderRightColor: 'transparent',
            borderTopColor: '#ddd',
            position: 'absolute',
            left: 0,
            top: 0,
            zIndex: 9
        }} >
        </View>

        <Text style={{
            position: 'absolute',
            fontFamily: 'ISFMedium',
            fontSize: 18,
            color: '#333',
            top: Dimensions.get('window').width / 10,
            left: 20,
            zIndex: 10
        }}  >ویلا</Text>
        <Text style={{
            position: 'absolute',
            fontFamily: 'ISFMedium',
            fontSize: 24,
            color: 'rgb(165, 45, 83)',
            left: 55,
            top: 15,
            zIndex: 10
        }} >8
            </Text>


    </TouchableOpacity>
)


export default RequestItems;


const styles = ({
    RequestItems: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: Dimensions.get('window').width - 30,
        height: (Dimensions.get('window').width - 30) / 3.5,
        backgroundColor: '#fff',
        borderRadius: 75,
        marginBottom: 15,
        zIndex: 2,
        overflow: 'hidden',
        backgroundColor: '#eee',
        position: 'relative',
    },
    sub_com: {
        height: '100%',
        flex: 1,
        flexDirection: 'row-reverse',
        justifyContent: 'flex-start'
    },
    right: {
        width: '40%',
        height: '100%',
    },
    image_child: {
        flexDirection: 'column',
        backgroundColor: 'rgba(0,0,0,.6)',
        width: (Dimensions.get('window').width - 30) / 3.5 - 10,
        height: (Dimensions.get('window').width - 30) / 3.5 - 10,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 100

    },
    location_box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(165, 45, 83,.7)',
        width: '100%',
        paddingVertical: 2
    },
    location_text: {
        fontFamily: 'IYR',
        fontSize: 9,
        color: '#fff'
    },
    location_vila: {
        fontFamily: 'IYB',
        fontSize: 14,
        color: '#fff'
    },
    location_number: {
        fontFamily: 'ISBOld',
        fontSize: 18,
        color: '#fff'
    },

    details: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'center',
        height: '100%',
        paddingRight: 15,
    },
    gradient: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5
    },
    details_text: {
        fontFamily: 'ISFBold',
        fontSize: 9,
        color: '#666',
        
    },
    details_icons: {
        width: 15,
        marginLeft: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },

    triangleCorner: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: 60,
        borderTopWidth: 120,
        borderRightColor: 'transparent',
        borderTopColor: '#ddd',
        position: 'absolute',
        left: 50,
        top: 0,
    },

})




    // < ResultRequest navigate = { this.showRequest }
    //                 locaion = { this.state.city }
    //                 startTime = { this.state.startTime }
    //                 persons = { this.state.persons }
    //                 minPrice = { this.state.minPrice }
    //                 maxPrice = { this.state.maxPrice }
    //                 requestNumber={this.state.requestNumber}
    // />

