import { StyleSheet, Dimensions, StatusBar } from 'react-native';


const styles = StyleSheet.create({

    home_cover: {
        backgroundColor: "#A52D53",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,

    },


    up: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: '#f6f6f6',
        borderBottomLeftRadius: 0,
        overflow: 'hidden',
        zIndex: 1,
        flex: 1
    },
    tab_box: {
        flex: 1,
        backgroundColor: '#f6f6f6',
        borderTopLeftRadius: 65,
        borderTopRightRadius: 65,
        overflow: 'hidden'
    },

    requestBox: {
        width: Dimensions.get('window').width,
        alignItems: 'center',
        paddingTop: 16,
        paddingBottom: 300,
    },

    modal_button: {
        position: 'absolute',
        bottom: 140,
        zIndex: 10,
        right: 20,
        width: 70,
        height: 70,
        borderRadius: 18,
        backgroundColor: '#333',
        justifyContent: 'center',
        alignItems: 'center',
    },
    navigationView: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    navigationView_box: {
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: '#A52D53',
        width: '100%',
        marginBottom: 10
    },

    icon_parent: {
        width: 100,
        height: 100,
        backgroundColor: '#aaa',
        borderWidth: 5,
        borderColor: '#fff',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        elevation: 10
    },



    icon: {
        width: '100%',
        height: '100%',
        borderRadius: 20,

    },

    person_desc: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    person_name: {
        fontSize: 14,
        fontFamily: 'ISBold',
        marginTop: 10,
        color: '#fff'
    },
    bottom_icons: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        width: '100%'
    },
    drawer_text: {
        fontSize: 12,
        color: '#A52D53',
        fontFamily: 'ISBold',
        marginRight: 10,
    },
    modal_body: {
        flexDirection: 'column',
        width: Dimensions.get('window').width - 30,
        height: Dimensions.get('screen').height,
        // top: 0,
        // bottom: 0,
        // flex: 1,
        position: 'relative',
        backgroundColor: '#fff',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        marginTop: 25


    },

    modal_price: {
        width: '90%',
        flexDirection: 'column',
        marginVertical: 5,
        borderRadius: 5,
        zIndex: -10,
        // height: 200,
        justifyContent: 'space-between',
        backgroundColor: '#eee',

    },
    modal_boxes: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#f3f3f3',
        marginBottom: 10,
        paddingHorizontal: 10,
        height: 45,
        width: '90%',
        borderRadius: 30,
        elevation: 1,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#f3f3f3',
    },
    show_selected_date: {
        fontSize: 12,
        color: '#555',
        fontFamily: 'ISFMedium',
        textAlign: 'left',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        textAlign: 'center',
    },
    show_selected_date_text: {
        fontSize: 12,
        color: '#555',
        fontFamily: 'ISFMedium',
        textAlign: 'right',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        textAlign: 'center'
    },

    right_icon_box: {
        flexDirection: 'row',
        width: '50%',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capacity: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        width: '50%',
        paddingBottom: 5,
    },
    price: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        // paddingBottom: 5,
        bottom: 7
    },
    modal_titles: {
        flexDirection: 'row',
        fontSize: 12,
        fontFamily: 'ISFBold',
        alignItems: 'center',
        color: '#636363',
    },
    gheymat: {
        fontSize: 12,
        fontFamily: 'ISBold',
        color: '#636363'
    },
    toman: {
        fontSize: 8,
        fontFamily: 'ISBold',
        color: '#636363'
    },

    price_input: {
        backgroundColor: '#fff',
        height: 50,
        fontSize: 14,
        fontFamily: 'ISBold',
        textAlign: 'left',
        paddingRight: 10,
        width: '50%',
        color: '#636363'
    },


    new_request_box: {
        width: '100%',
        height: 220,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 40,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        position: 'absolute',
        backgroundColor: 'transparent',
        flexDirection: 'column',
    },
    search_touch_sibling: {
        width: '90%',
        height: 180,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: '#f3f3f3'
    },
    search_touch: {
        backgroundColor: '#fff',
        width: Dimensions.get('window').width / 3.5,
        height: Dimensions.get('window').width / 3.5,
        borderRadius: 1000,
        alignItems: 'center',
        justifyContent: 'center',
        top: Dimensions.get('window').width / 7,
        borderWidth: 5,
        borderColor: '#fff',
        shadowColor: "black",
        shadowOpacity: .5,
        elevation: 2,
        zIndex: 99
    },

    select_date: {
        borderRadius: 5,
        width: '50%',
        color: '#636363',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'ISBold',
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
        width: '95%',
        paddingHorizontal: 5,
        borderRadius: 5,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 50
    },
    picker_item: {
        fontFamily: 'ISBold',
        paddingVertical: 10,
        fontSize: 14,
        textAlign: 'center',
        color: '#333'
    },
    picker_button: {
        borderBottomWidth: 1,
        borderBottomColor: '#f1f1f1',
        width: '100%',
        backgroundColor: '#fff',
        padding: 5
    },
    title_box: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    title_child: {
        width: '100%',
        flexDirection: 'row',
        height: 50
    },
    modal_title: {
        fontFamily: 'ISMedium',
        fontSize: 14,
        color: '#A52D53',
        width: '100%',
        textAlign: 'center'
    },
    modal_form: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        alignItems: "center",
    },
    city_text_box: {
        width: '50%',
        height: 28,
        borderRadius: 5,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 30
    },
    date_box: { width: '100%', flexDirection: 'row', alignItems: 'center' },
    date_view: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 28,
        backgroundColor: '#fff',
        borderRadius: 30
    },
    date_text_box: { flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'space-between' },
    date_icons: { position: 'absolute', left: 2 },
    enter_time: {
        fontSize: 12,
        fontFamily: 'ISBold',
        alignItems: 'center',
        color: '#636363'
    },
    price_box: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f3f3f3',
        marginBottom: 10,
        padding: 10,
        height: 70,
        width: '90%',
        borderRadius: 30,
        elevation: 1,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#f3f3f3',
    },
    price_parent: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        position: 'relative',
    },
    low_price: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: 20,
        paddingHorizontal: 20
    },
    price_text: {
        color: '#A52D53',
        fontFamily: 'ISFBold',
        fontSize: 12
    },
    price_limit: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'relative',
    },  
    tooman:{ fontFamily: 'IS', fontSize: 10, color: '#444' },
    send_req:{
        backgroundColor: '#A52D53',
        width: Dimensions.get('window').width / 3.5 - 10,
        height: Dimensions.get('window').width / 3.5 - 10,
        borderRadius: 1000,
        alignItems: 'center',
        justifyContent: 'center',
    },
    send_req_text:{ fontSize: 14, color: '#fff', fontFamily: 'ISBold' },
    modal_jalai:{
        position: 'absolute',
        overflow: 'hidden',
        top: -50,
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        backgroundColor: 'rgba(0,0,0,.7)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 90
    },
    jalali_box:{ backgroundColor: '#fff', width: '95%', padding: 10, borderRadius: 5 },
    tab_text: {
        fontSize: 12,
        fontFamily: 'IYB',
        zIndex: 11,
        color: '#fff',
        textAlign: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 30
    },
    line: {
        width: 1,
        height: '80%',
        backgroundColor: '#ddd'
    },
    indicator_box: {
        backgroundColor: '#A52D53',
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    indicator: {
        width: (Dimensions.get('window').width / 3),
        alignItems: 'center',
        backgroundColor: 'transparent',
        padding: 5
    },
    indicator_text: {
        textAlign: 'center',
        fontFamily: 'ISBold',
        fontSize: 10,
        color: '#fff',
        width: (Dimensions.get('window').width / 3) - 20,
        padding: 5,
    },
    indicator_text_selected: {
        textAlign: 'center',
        width: (Dimensions.get('window').width / 3) - 20,
        color: '#fff',
        backgroundColor: "#fff4",
        borderRadius: 30,
        fontFamily: 'ISBold',
        fontSize: 10,
        padding: 5
    },
    new_request_btn: {
        position: 'absolute',
        bottom: StatusBar.currentHeight + 10,
        zIndex: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 30,
        paddingVertical: 5,
    },
    new_request_linear: {
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
        flexDirection: 'row',
        paddingHorizontal: 30,
        paddingVertical: 5
    },
    modal_box: {
        height: Dimensions.get('screen').height,
        position: 'relative',
        backgroundColor: '#A52D53',
        alignItems: 'center'
    }



})


export default styles;
