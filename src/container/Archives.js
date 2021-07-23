import React, { Component } from 'react';
import {Text,View,Dimensions,TouchableOpacity,ScrollView} from 'react-native';


import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//styles
import styles from '../styles/Archives';


export default class Archives extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [
                { title: 'ویلای لوکس محمودآباد', start_time: '1398/08/28', end_time: '1398/08/29', clock: '23:59', price: '400,000', persons: 2, owner: 'صابر نوایی' },
                { title: 'ویلای جنگلی بابلسر', start_time: '1398/03/21', end_time: '1398/08/24', clock: '18:41', price: '900,000', persons: 3, owner: 'محمد ثوابی' },
                { title: 'آپارتمان استخردار آمل', start_time: '1398/02/08', end_time: '1398/02/09', clock: '10:22', price: '300,000', persons: 1, owner: 'محمود کیکاووسی زندوکیلی  ' },
            ]
        }
    }




    render() {

        return (
            <View style={styles.Archives}>

                <View style={styles.account_box}>
                    
                    {/* clear all archive */}
                    <TouchableOpacity
                        style={styles.clear_btn}
                        activeOpacity={.5}
                    >
                        <Icon style={{ marginRight: 5 }} name="delete" size={20} color="#f6f6f6" />
                        <Text style={styles.clear_text} >پاک کردن همه آرشیوها</Text>

                    </TouchableOpacity>

                </View>

                <View style={styles.body}>
                    <View style={styles.title_table} >
                        <Text style={[styles.texts_title, { width: 25 }]} >ردیف</Text>
                        <Text style={styles.texts_title} >عنوان</Text>
                        <Text style={styles.texts_title} >بازه زمانی</Text>
                        <Text style={[styles.texts_title, { width: 45 }]} >مبلغ</Text>
                        <Text style={[styles.texts_title, { width: 25 }]}  >تعداد</Text>
                        <Text style={[styles.texts_title, { width: 40 }]}>ساعت</Text>
                        <Text style={styles.texts_title} >موجر</Text>
                    </View>
                    <ScrollView >


                        {
                            this.state.data.map((data, i) => {
                                return <View key={i+1} style={[styles.body_table,{ backgroundColor: (i+1)%2 === 0 ? 'rgba(67, 154, 251, 0.1)' : '#fff' }]} >
                                    <Text style={[styles.texts, { fontSize: 12, color: '#333', fontFamily: 'ISFBold', width: 25 }]} >{i + 1}</Text>
                                    <Text style={styles.texts} >{data.title}</Text>
                                    <View style={{ width: (Dimensions.get('window').width - 155) / 3, flexDirection: 'column', alignItems: "center", justifyContent: 'space-around', height: '100%' }} >
                                        <Text style={styles.texts} >{data.start_time} </Text>
                                        <Text style={{ width: 60, height: 1, backgroundColor: '#333' }} ></Text>
                                        <Text style={styles.texts} >{data.end_time}</Text>
                                    </View>
                                    <Text style={[styles.texts, { width: 45 }]} >{data.price}</Text>
                                    <Text style={[styles.texts, { width: 25 }]}>{data.persons}</Text>
                                    <Text style={[styles.texts, { width: 40 }]} >{data.clock}</Text>
                                    <Text style={styles.texts} >{data.owner}</Text>
                                </View>

                            })
                        }
                    </ScrollView>

                </View>
            </View>



        );
    }
}
