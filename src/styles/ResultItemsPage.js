import { StyleSheet, Dimensions } from 'react-native';

const IMAGE_HEIGHT = 100;


const styles = StyleSheet.create({

    ResultItemsPage: {
        width: Dimensions.get('window').width,
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 200,
        position: 'relative'

    },
    tab: {
        width: Dimensions.get('window').width - 30,
        flexDirection: 'row-reverse',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 15,
        height: 60,
        backgroundColor: '#f3f3f3',
        borderRadius: 50,
        zIndex: 10,
        paddingVertical: 15
    },
    summary_box: {
        height: 50,
        right: 0,
        left: 0,
        position: 'absolute',
        top: 50,
        zIndex: 99,
        paddingHorizontal: 15,
        justifyContent: 'center'
    },
    sub_summary_box: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: this.summaryOpacity,
        height: 40,
        borderRadius: 40
    },
    twin_tab: {
        height: 90,
        right: 0,
        left: 0,
        position: 'absolute',
        top: 100,
        justifyContent: 'center',
        backgroundColor: '#A52D53',
        overflow: 'hidden',
        zIndex: 100,
    },
    twin_box:{
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'center',
        height: 90,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        width: Dimensions.get('window').width,
        backgroundColor: '#fff',
    },
    twin_box_2:{
        width: Dimensions.get('window').width - 30,
        flexDirection: 'row-reverse',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 15,
        height: 60,
        backgroundColor: '#f3f3f3',
        borderRadius: 30,
        paddingVertical: 15
    },
    tab_text:{
        width: '30%',
        fontSize: 12,
        fontFamily: 'IYB',
        paddingRight: 8
    },
    tab_btns:{
        width: '70%',
        height: 36,
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 10,
    },
    summary_Text: {
        fontFamily: 'ISBold',
        fontSize: 10,
        color: '#fff'
    },
    seprator: {
        marginHorizontal: 5,
        color: '#fff'
    },
    tab_box: {
        width: '31%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: "100%",
        backgroundColor: '#fafafa',
        borderRadius: 50,
        zIndex: 11,

    },

    tab_text: {
        fontSize: 10,
        fontFamily: 'ISBold',
        marginLeft: 5,
        zIndex: 11,
    },
    line: {
        width: 1,
        height: '80%',
        backgroundColor: '#ddd'
    },
    details: {
        width: Dimensions.get('window').width,
        flexDirection: 'row',
    },
    details_right_image: {
        width: '100%',
        height: IMAGE_HEIGHT,
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(165, 45, 83,1)',


    },

    detail_view: {
        fontFamily: 'ISFBold',
        fontSize: 10,
        color: '#fff'
    }




})


export default styles;
