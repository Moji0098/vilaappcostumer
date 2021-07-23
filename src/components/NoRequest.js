import React from 'react';
import { Text, View, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const NoRequest = (props) => (
    <TouchableOpacity
        style={styles.noRequest}
        onPress={props.press}
        activeOpacity={.7}>
        <View styel={{ flexDirection: 'column' }} >
            <Text style={styles.noRequestTitle}>چیزی برای نمایش وجود ندارد</Text>
            <Text style={styles.noRequestText}>برای درخواست دکمه ی  درخواست جدید را فشار دهید</Text>
        </View>
        <Icon style={{ marginLeft: 10 }} size={50} name="home-alert" color="#A52D53" />
    </TouchableOpacity >
)


export default NoRequest

const styles = ({
    noRequest: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width - 30,
        height: (Dimensions.get('window').width - 30) / 3.5,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 1000,
    },

    noRequestTitle: {
        fontSize: 14,
        fontFamily: 'ISBold',
        color: '#333'
    },
    noRequestText: {
        fontSize: 10,
        fontFamily: 'ISBold',
        color: '#555'
    },

})
