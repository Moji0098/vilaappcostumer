import { StyleSheet, Dimensions } from 'react-native';





const styles = StyleSheet.create({

    EnterCode: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: '#eee',
    },
    keyboard_container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    main: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
    },

    box_1: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width: Dimensions.get('window').width - 100,
    },

    my_code: {
        fontSize: 18,
        fontFamily: 'ISBold',
    },

    resend_box: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },

    my_number: {
        fontSize: 14,
        fontWeight: '900',
        color: '#b7b7b7',
        fontFamily: 'ISFBold',
    },

    resend_text: {
        fontSize: 12,
        fontFamily: 'ISBold',
        marginRight: 10,
        color: '#fff',
        backgroundColor: '#C72A54',
        borderRadius: 50,
        paddingHorizontal: 10,
        paddingVertical: 2,
    },

    wrong_animation: {
        height: 20,
        width: Dimensions.get('window').width - 100,
        fontSize: 10,
        fontFamily: 'ISBold',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'red',
        marginTop: 20,
        textAlign: 'center',
    },

    box_2: {
        // flexGrow: 1,
        height: 200,
        width: Dimensions.get('window').width - 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        marginTop: 80,
        marginBottom: 30,
        borderRadius: 20,
        shadowColor: "#f7f7f7",
        shadowOpacity: 1,
        elevation: 2,
    },

    activation_code_text: {
        fontFamily: "ISMedium",
        color: '#333',
        marginBottom: 20,
        fontSize: 15,
        marginTop: 20

    },
    code_show_box: {
        flexDirection: 'row',
    },
    code_input: {
        fontFamily: 'ISFBold',
        marginHorizontal: 5,
        paddingHorizontal: 5,
        fontSize: 24,
        paddingBottom: 5,
        borderBottomWidth: 2,
        textAlign: 'center',
        width: '50%',
        letterSpacing: 18
    }

})


export default styles;
