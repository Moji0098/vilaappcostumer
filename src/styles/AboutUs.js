import { StyleSheet, Dimensions } from 'react-native';


const styles = StyleSheet.create({


    AboutUs: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('screen').height,
        backgroundColor: '#eee',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    title: {
        width: '80%',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    title1: {
        fontSize: 30,
        fontWeight: '900',
        textAlign: 'center',
        color: '#333'
    },
    title2: {
        fontSize: 30,
        fontWeight: '900',
        textAlign: 'center',
        color: '#A52D53'
    },
    version: {
        fontSize: 14,
        fontWeight: '900',
        textAlign: 'center',
        color: '#636363',
        bottom: -5,
        fontFamily: 'ISF'
    },

    body: {
        width: '90%',
        padding: 10,
        paddingBottom: 200,
        // alignItems: 'flex-end',
    },
    texts: {
        fontFamily: 'ISMedium',
        fontSize: 12,
        color: '#444'
    }




})


export default styles;
