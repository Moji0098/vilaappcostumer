import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


{/* <Header title="نتایج جستجو - 218#"
    leftIcon="bell-outline"
    leftPress={() => Actions.Support()}
    rightIcon="arrow-right"
    rightPress={() => Actions.pop()}
    iconColor="#B22850"
    notification={true}
/> */}



const Header = (props) => (
    <View style={styles.menu}>
        <TouchableOpacity
            style={styles.menu_icon}
            onPress={props.leftPress}>
            {props.notification ? <View style={styles.notification_circle} ></View> : null}
            <Icon name={props.leftIcon} size={32} color="#A52D53" />
        </TouchableOpacity>
        <Text style={styles.title}>{props.title}</Text>
        {
            props.home ?
                <TouchableOpacity style={styles.menu_icon} onPress={props.rightPress} >
                    <Text style={{position:'absolute',top:17,right:10,borderRadius:5, width: 24, height:3, backgroundColor: '#A52D53' }} ></Text>
                    <Text style={{position:'absolute',top:25,right:10,borderRadius:5, width: 30, height:3, backgroundColor: '#A52D53' }} ></Text>
                    <Text style={{position:'absolute',top:33,right:10,borderRadius:5, width: 20, height:3, backgroundColor: '#A52D53' }} ></Text>
                </TouchableOpacity> :
                <TouchableOpacity style={styles.menu_icon} onPress={props.rightPress} >
                    <Icon name={props.rightIcon} size={36} color="#A52D53" />
                </TouchableOpacity>
        }

    </View>
)


export default Header

const styles = ({
    menu: {
        backgroundColor: '#f6f6f6',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        width: '100%',
        paddingVertical: 5,
        alignItems: 'center',
    },
    notification_circle: {
        width: 15,
        height: 15,
        borderRadius: 7,
        backgroundColor: '#A52D53',
        end: 10,
        top: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        borderWidth: 2,
        borderColor: '#f6f6f6',
        borderRadius: 20,
        zIndex: 99
    },
    menu_icon: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    title: {
        fontSize: 14,
        fontFamily: 'ISBold',
        color: '#333',
        textAlign: 'center',
    },
})

