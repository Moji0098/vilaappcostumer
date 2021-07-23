import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//components 
import Notification from '../components/Notification';

//styles
import styles from '../styles/Notifications';




export default class Notifications extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    _navigate = () => {

    }

    _deleteNotification = () => {

    }

    render() {

        return (
            <View style={styles.Notifications} >

                <View style={styles.account_box}>
                    <TouchableOpacity
                        style={styles.clear_all}
                        activeOpacity={.5}
                    >
                        <Icon style={{ marginRight: 5 }} name="delete" size={20} color="#f6f6f6" />
                        <Text style={styles.clear_all_text} >پاک کردن همه اعلانات</Text>

                    </TouchableOpacity>

                </View>

                <ScrollView contentContainerStyle={{ width: '100%' }}>
                    <Notification
                        bgColor="#37A3D6"
                        icon="cellphone-arrow-down"
                        iconColor="#37A3D6"
                        titleColor="#fff"
                        title="آپدیت جدید"
                        description="برای آپدیت کردن اپلیکیشن فشار دهید"
                        navigate={this._navigate}
                        deleteNotification={this._deleteNotification}
                    />

                    <Notification
                        bgColor="#A52D53"
                        icon="home-lock-open"
                        iconColor="#A52D53"
                        titleColor="#fff"
                        title="ویلای لوکس محمودآباد"
                        description="درخواست شمابرای اجاره ویلا پذیرفته شد"
                        navigate={this._navigate}
                        deleteNotification={this._deleteNotification}
                    />

                    <Notification
                        bgColor="#1ABC9C"
                        icon="message-text-outline"
                        iconColor="#1ABC9C"
                        titleColor="#fff"
                        title="ارسال موفق پیام"
                        description="پیام شما به درستی برای پشتیبانی ارسال شد"
                        navigate={this._navigate}
                        deleteNotification={this._deleteNotification}
                    />

                </ScrollView>
            </View>


        );
    }
}
