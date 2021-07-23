import { StyleSheet, Dimensions } from 'react-native';


const styles = StyleSheet.create({

    profile_keyboard: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    EditProfile: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: '#eee',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    change_image: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        borderRadius: 22,
        overflow: 'hidden'
    },
    icon_image: {
        backgroundColor: 'rgba(0,0,0,.3)',
        padding: 2,
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        alignItems: 'center',
        width: '100%',
        height: 20
    },

    icon_parent: {
        width: 80,
        height: 80,
        borderWidth: 4,
        borderColor: '#fff',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        marginBottom: 40
    },

    icon_cover: {
        width: 72,
        height: 72,
        backgroundColor: '#A52D53',
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    images_box: {
        width: 62,
        height: 62,
        // borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'cover',
        position: 'relative'
    },

    icon: {
    },
    account_box: {
        flexDirection: 'column',
        width: Dimensions.get('window').width - 40,
        paddingVertical: 20,
        borderRadius: 10,
    },
    account_title: {
        fontSize: 14,
        fontFamily: 'ISBold',
        color: '#333'
    },
    account_text: {
        fontSize: 12,
        fontFamily: 'IS',
        color: '#aaa'
    },
    input_box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        marginBottom: 5,
        paddingHorizontal: 10,
        borderRadius: 15,
        height: 40,
        width: Dimensions.get('window').width - 40,
        elevation: 1,
        overflow: 'hidden'
    },

    form_inputs: {
        backgroundColor: '#fff',
        height: 40,
        fontSize: 10,
        fontFamily: 'ISFBold',
        textAlign: 'right',
        paddingRight: 10,
        width: '90%',
        color: '#333'

    },
    form_birthday: {
        backgroundColor: '#fff',
        fontSize: 10,
        fontFamily: 'ISBold',
        textAlign: 'right',
        paddingRight: 10,
        width: '90%',

    },
    picker_modal: {
        position: 'absolute',
        right: 0,
        left: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    picker_box: {
        width: '90%',
        padding: 20,
        borderRadius: 30,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 50,
        overflow: 'hidden',
    },
    city_modal: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 5,
        width: Dimensions.get('window').width - 40,
    },
    city_modal_box: {
        backgroundColor: '#fff',
        height: 40,
        width: '49%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 20,
        borderRadius: 15,
        elevation: 1,
        overflow: 'hidden'
    }, city_modal_text: {
        backgroundColor: '#fff',
        height: 40,
        fontSize: 10,
        fontFamily: 'ISBold',
        textAlign: 'right',
        paddingRight: 10,
        width: '90%',
        color: '#333'
    },
    province_modal: {
        backgroundColor: '#fff',
        height: 40,
        width: '49%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 20,
        borderRadius: 15,
        elevation: 1,
        overflow: 'hidden'
    },
    province_modal_text: {
        backgroundColor: '#fff',
        height: 40,
        fontSize: 10,
        fontFamily: 'ISBold',
        textAlign: 'right',
        paddingRight: 10,
        width: '90%',
        color: '#333'
    },
    birthday: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 5,
        width: Dimensions.get('window').width - 40,
    },
    birthday_btn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        borderRadius: 15,
        height: 40,
        width: '49%',
        elevation: 1,
        overflow: 'hidden'
    },
    disable_number: {
        backgroundColor: '#fff',
        height: 40,
        width: '49%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 20,
        borderRadius: 15,
        elevation: 1,
        overflow: 'hidden'
    },
    number_text: {
        backgroundColor: '#fff',
        height: 40,
        fontSize: 10,
        fontFamily: 'ISBold',
        textAlign: 'right',
        paddingRight: 10,
        width: '90%',
        color: '#333'
    },accept:{
        width: 100,
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 12,
        fontFamily: 'ISBold',
        backgroundColor: '#0C394C',
        borderRadius: 10,
        textAlign: "center",
        color: '#fff'
    }

})


export default styles;
