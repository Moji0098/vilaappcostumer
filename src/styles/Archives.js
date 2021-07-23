import { StyleSheet, Dimensions } from 'react-native';


const styles = StyleSheet.create({

    Archives: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('screen').height,
        backgroundColor: '#eee',
        alignItems: 'center',
    },
    account_box: {
        flexDirection: 'row',
        width: Dimensions.get('window').width - 20,
        marginVertical: 20,
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    account_title: {
        fontSize: 16,
        fontFamily: 'ISBold',
        color: '#333',
        textAlign: 'right'
    },
    clear_btn: {
        backgroundColor: '#C50143',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    clear_text: {
        fontSize: 12,
        fontFamily: 'ISBold',
        color: '#f6f6f6',
        textAlign: 'left',
    },
    body: {

    },
    title_table: {
        width: Dimensions.get('window').width - 20,
        flexDirection: 'row-reverse',
        backgroundColor: '#439AFB',
        borderRadius: 15,
        height: 36,
        paddingHorizontal: 10,
        alignItems: 'center',
        marginBottom: 10,
        justifyContent: 'space-between',
    },
    body_table: {
        width: Dimensions.get('window').width - 20,
        flexDirection: 'row-reverse',
        backgroundColor: '#FFF',
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 5,
        height: 45,
        marginBottom: 5,
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    texts_title: {
        fontSize: 9,
        fontFamily: 'ISBold',
        color: '#fff',
        textAlign: 'center',
        width: (Dimensions.get('window').width - 155) / 3,
    },
    texts: {
        fontSize: 9,
        fontFamily: 'ISF',
        color: '#333',
        textAlign: 'center',
        width: (Dimensions.get('window').width - 155) / 3,
    }



})


export default styles;
