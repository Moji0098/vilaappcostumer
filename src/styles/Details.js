import { StyleSheet, Dimensions } from 'react-native';


const styles = StyleSheet.create({

    Details: {
        backgroundColor: "#fff",
        width: Dimensions.get('window').width,
        flex: 1,
        position: 'relative',
    },

    header: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        padding: 20,
        width: '100%',
        position: 'absolute',
        top: 0,
        zIndex: 99999,
        width: '100%'
    },
    custom_merker: {
        backgroundColor: '#a52d5388',
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#a52d53'
    },

    villa_info_img: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * .75,
        resizeMode: 'cover'
    },

    image_container: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: 20,
        backgroundColor: 'rgba(0,0,0,0.5)',
        height: 120,
        paddingBottom: 50
    },
    image_slider_detail: {
        width: 100,
        textAlign: 'center',
        height: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    villa_price: {
        backgroundColor: 'rgba(255,255,255,1)',
        textAlign: 'center',
        paddingHorizontal: 50,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    price_text: {
        color: '#333',
        fontSize: 16,
        fontFamily: 'ISFBold'
    },
    image_slider_modal: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        zIndex: 9999,
        top: 0,
        bottom: 0,
        right: 0,
        left: 0
    },
    owner_answer: {
        fontSize: 10,
        fontFamily: 'ISBold',
        color: '#fff',
        backgroundColor: '#6FCF97',
        borderRadius: 30,
        paddingHorizontal: 30,
        paddingVertical: 2,
        textAlign: 'center',
        marginTop: 10
    },
    back_button: {
        backgroundColor: '#33333320',
        padding: 10,
        width: 50,
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        top: 10,
        end: 10,
        position: 'absolute'
    },
    image_counter: {
        color: '#fff',
        fontFamily: 'ISFBold',
        marginTop: 3,
        fontSize: 12
    },
    vila_posibilities: {
        backgroundColor: '#f6f6f6',
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '90%',
        marginTop: 20,
        padding: 15,

    },
    posibility: {
        alignItems: 'center',
        flexDirection: 'row',
        width: '25%',
        justifyContent: 'center',
    },
    posibility_text: {
        fontSize: 10,
        fontFamily: 'ISFBold',
        color: '#333',
        marginRight: 5
    },
    posibility_icon_box: {
        backgroundColor: '#eee',
        width: 25,
        height: 25,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    posibility_icon: {
        width: 15,
        resizeMode: 'contain'
    },
    about_vila: {
        backgroundColor: '#f6f6f6',
        width: '90%',
        marginTop: 20,
        paddingTop: 20,
        paddingBottom: 10,
        paddingHorizontal: 20,
        borderRadius: 10
    },
    about_vila_first: {

    },
    detail_title: {
        fontSize: 15,
        fontFamily: 'ISFBold',
        color: '#333',
        marginBottom: 10
    },
    about_vila_text: {
        fontSize: 12,
        fontFamily: 'ISMedium',
        color: '#333',
    },

    availability: {
        backgroundColor: '#f6f6f6',
        width: '90%',
        marginTop: 20,
        paddingTop: 20,
        paddingBottom: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    availability_first: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },

    availability_item: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 5
    },


    availability_text: {
        fontSize: 12,
        fontFamily: 'ISMedium',
        color: '#333',
    },

    availability_icon: {
        marginLeft: 5
    },
    conditions: {
        backgroundColor: '#f6f6f6',
        width: '90%',
        marginTop: 20,
        paddingTop: 20,
        paddingBottom: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    conditions_text: {
        fontSize: 12,
        fontFamily: 'ISMedium',
        color: '#333',
    },

    save_button: {
        width: Dimensions.get('window').width,
        flexGrow: 2,
        justifyContent: "center",
        borderRadius: 50,
        backgroundColor: '#fff',
        height: 160,
        top: -50,
        alignItems: 'center',
    },
    payment_modal_close: {
        backgroundColor: '#f7f7f7',
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 10
    },

    Modal: {
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#f6f6f6',
        height: Dimensions.get('window').height,
    },
    modal_title: {
        alignItems: 'center',
        marginTop: -40,
        width: '100%'
    },
    modal_image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    modal_image_box: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: 20,
        backgroundColor: 'rgba(0,0,0,0.5)',
        height: 100,
        paddingBottom: 40
    },
    modal_image_detail: {
        width: 100,
        textAlign: 'center',
        height: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    modal_back_btn: {
        backgroundColor: '#33333320',
        padding: 10,
        width: 50,
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container_detail: {
        top: -50,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    condition_box_btn: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    condition_btn: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '49%',
        justifyContent: 'flex-end',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 5
    },
    condition_accept_icon: {
        width: 20,
        height: 20,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#18749a',
        justifyContent: 'center',
        alignItems: 'center'
    },
    read_condition: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '49%',
        justifyContent: 'flex-end',
        padding: 5
    },
    read_condition_text: {
        fontSize: 10,
        fontFamily: 'ISBold',
        textAlign: 'right',
        marginRight: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#18749a'
    },
    condition_container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    },
    condition_box: {
        flex: 1,
        backgroundColor: '#eee',
        borderRadius: 5,
        padding: 10
    },
    door_icon_box: {
        width: 10,
        height: 13,
        backgroundColor: '#636363',
        borderRadius: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    map_box: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * .75,
        marginTop: 20,
        position: 'relative'
    },
    door_handler: {
        width: 2,
        height: 2,
        borderRadius: 10,
        backgroundColor: '#eee',
        left: 3
    },
    arrow_text: {
        fontSize: 13,
        fontFamily: 'ISBold',
        color: '#ccc',
    },
    icon_parent: {
        width: 90,
        height: 90,
        backgroundColor: '#aaa',
        borderWidth: 10,
        borderColor: '#f5f5f5',
        borderRadius: 55,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#f7f7f7",
        shadowOpacity: 1,
        elevation: 1,
    },
    icon_child: {
        width: 70,
        height: 70,
        backgroundColor: '#eee',
        borderWidth: 8,
        borderColor: '#f8f8f8',
        borderRadius: 45,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#f7f7f7",
        shadowOpacity: 1,
        elevation: 1,
    },

    icon_cover: {
        width: 70,
        height: 70,
        backgroundColor: '#C92652',
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: '100%',
        height: '100%',
        borderRadius: 35,
        resizeMode: 'cover'
    },
    person_desc: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '90%',
        borderBottomWidth: 1,
        borderColor: '#ddd',
        paddingBottom: 4
    },
    person_name: {
        fontSize: 13,
        fontFamily: 'ISMedium',
        marginTop: 5,
        color: '#333'
    },
    person_number: {
        fontSize: 12,
        fontFamily: 'ISF',
        color: '#949494'
    },

    rent_detail: {
        width: '90%',
        marginVertical: 10,
        overflow: 'hidden',
    },
    rent_inputs: {
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginTop: 5,
    },
    input_box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#fff',
        paddingHorizontal: 5,
        borderRadius: 15,
        height: 40,
        width: '100%',
        elevation: 1,
        marginTop: 5

    },
    form_inputs: {
        height: 40,
        fontSize: 10,
        fontFamily: 'ISBold',
        textAlign: 'right',
        width: '100%'

    },

    rent_rows: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        overflow: 'hidden'
    },
    rent_items: {
        width: '49%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 4,
    },
    rent_text: {
        fontSize: 11,
        fontFamily: 'ISF',
        color: '#333'
    },
    rent_number: {
        fontSize: 11,
        fontFamily: 'ISFBold',
        color: '#333',
        textAlign: 'center'
    },
    totalـprice: {
        width: '49%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: '#18749a44',
        borderRadius: 10
    },
    total_number: {
        fontSize: 14,
        fontFamily: 'ISFBold',
        color: '#333'
    },
    total_text: {
        fontFamily: 'ISFBold',
        fontSize: 14,
        color: '#333',
    },

    accept_from_owner: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 30,
        borderRadius: 30,
    },
    rule_text: {
        textAlign: 'right',
        fontFamily: 'ISF',
        color: '#a52d53',
        fontSize: 12,
        marginBottom: 5
    }



})


export default styles;
