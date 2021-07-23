import { StyleSheet, Dimensions  } from 'react-native';


const styles = StyleSheet.create({

    Notifications: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('screen').height,
        backgroundColor: '#eee',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    account_box: {
        flexDirection: 'row',
        width: '90%',
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
    clear_all:{
        backgroundColor: '#C50143',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    clear_all_text:{
        fontSize: 12,
        fontFamily: 'ISBold',
        color: '#f6f6f6',
        textAlign: 'left',
    }


})


export default styles;
