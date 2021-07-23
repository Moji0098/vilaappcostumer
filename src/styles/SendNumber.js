import { StyleSheet, Dimensions, StatusBar } from 'react-native';


const styles = StyleSheet.create({

    send_number: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#A52D53',
        height: Dimensions.get('window').height - StatusBar.currentHeight,
    },
    bg_image: {
        flex: 1,
        height: Dimensions.get('window').height - StatusBar.currentHeight,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    send_number_key: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo_box: {
        width: 160,
        height: 160,
        backgroundColor: '#f5f5f5',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
    },
    logo: {
        width: 80,
        height: 80,
        marginBottom: 20
    },

    input_box: {
        flexDirection: 'row',
        width: Dimensions.get('window').width - 100,
        borderRadius: 15,
        shadowColor: "#f7f7f7",
        shadowOpacity: 1,
        elevation: 1,
        backgroundColor: '#fff',
        height: 45
    },
    iran_img: {
        flexDirection: 'row',
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: '#ccc',
    },
    fade_text: {
        height: 20,
        width: Dimensions.get('window').width - 100,
        fontSize: 10,
        fontFamily: 'ISBold',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'red',
        paddingHorizontal: 20,
        marginTop: 5,
    },
    input_box_1: {
        height: 45,
        paddingLeft: 10,
        fontSize: 12,
        fontWeight: '900',
        fontFamily: 'ISF',
        marginTop: 3
    },
    input_box_2: {
        height: 45,
        width: '70%',
        paddingLeft: 10,
        fontSize: 18,
        letterSpacing: 5,
        fontWeight: '900',
        fontFamily: 'ISFBold',
        marginTop: 4,
    },
    number_inputs: {
        marginTop: 50,
    },
    number_inputs_title: {
        color: '#999',
        fontSize: 12,
        marginBottom: 10,
        fontFamily: 'ISBold',

    },



})


export default styles;
