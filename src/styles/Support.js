import { StyleSheet, Dimensions } from 'react-native';


const styles = StyleSheet.create({



    Support: {
        width: '100%',
        height: Dimensions.get('screen').height,
        backgroundColor: '#eee',
        alignItems: 'center',
    },
    support_key: {
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon_parent: {
        width: 90,
        height: 90,
        backgroundColor: '#aaa',
        borderWidth: 10,
        borderColor: '#f5f5f5',
        borderRadius: 45,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#f7f7f7",
        shadowOpacity: 1,
        elevation: 1,
    },
    icon_child: {
        width: 70,
        height: 70,
        backgroundColor: '#fff',
        borderWidth: 10,
        borderColor: '#f8f8f8',
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#f7f7f7",
        shadowOpacity: 1,
        elevation: 1,
    },

    icon_cover: {
        width: 50,
        height: 50,
        backgroundColor: '#C92652',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 25,
        height: 25,
        backgroundColor: '#C92652',
    },
    account_box: {
        flexDirection: 'column',
        width: '90%',
        marginTop: 20
    },
    account_title: {
        fontSize: 16,
        fontFamily: 'ISBold',
        color: '#333',
        width: '100%',
        textAlign: 'right'
    },
    account_text: {
        fontSize: 12,
        fontFamily: 'IS',
        color: '#aaa'
    },

    account_form: {
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        marginTop: 50
    },
    form_inputs: {
        backgroundColor: '#fff',
        width: '90%',
        borderRadius: 15,
        marginBottom: 10,
        height: 40,
        fontSize: 10,
        fontFamily: 'ISBold',
        paddingHorizontal: 10,
        shadowColor: "#f7f7f7",
        shadowOpacity: 1,
        elevation: 1,
        textAlign: 'right'
    },
    form_textarea: {
        backgroundColor: '#fff',
        width: '90%',
        borderRadius: 15,
        marginBottom: 10,
        minHeight: 100,
        fontSize: 10,
        fontFamily: 'ISBold',
        paddingHorizontal: 10,
        shadowColor: "#f7f7f7",
        shadowOpacity: 1,
        elevation: 1,
        textAlign: 'right',
        textAlignVertical: 'top'
    },
    add_images_boxes: {
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        flexDirection: 'row-reverse',
        width: '90%',
    },
    images_box: {
        width: (Dimensions.get('window').width - 82) / 4,
        height: (Dimensions.get('window').width - 82) / 4,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: '#ececec',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        resizeMode: 'cover',
    },
    image_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        // padding: 10,

    },
    select_image: {
        color: '#636363',
        fontSize: 40,
        // resizeMode: 'cover',
        borderRadius: 10
    },
    call_email_container:{
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    call_email_box: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '48%',
        borderRadius: 90,
        height: 30
    },
    call_email_text: {
        fontSize: 12,
        fontFamily: 'ISBold',
        marginRight: 10
    }



})


export default styles;
