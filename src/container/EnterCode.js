import React, { Component } from 'react';
import {
    Text, View,
    Dimensions,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    Animated
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Actions } from 'react-native-router-flux';

//components
import GradientButton from '../components/GradientButton';

//styles
import styles from '../styles/EnterCode';



class EnterCode extends Component {

    constructor(props) {
        super(props)
        this.state = {
            bg: '#dfdfdf',
            code: '1234',
            wrongCode: false,
            fadeText: new Animated.Value(1),
            isLoading: false

        }
    }


    // resend number 
    _sendNumber = () => {
        Actions.pop()
    }


    // validation and go home
    _goHome = async () => {

        // if (this.state.code == this.props.code) {
        if (this.state.code == 1111) {
            this.setState({ isLoading: true })
            // go HOME
            Actions.reset('Home');
            this._storeData()


        } else {

            // animation show permission 
            await this.setState({
                wrongCode: true
            })

            //text animation 
            Animated.timing(
                this.state.fadeText,
                {
                    toValue: 0,
                    duration: 2000,
                    delay: 3000
                }
            ).start()

            // set text animation opacity value
            // reset wrong number to default
            setTimeout(() => {
                this.setState({
                    wrongCode: false,
                    fadeText: new Animated.Value(1),
                })
            }, 5000)
        }

    }


    // store token in storage
    _storeData = async () => {
        try {
            await AsyncStorage.setItem('@token', 'true')

        } catch (e) {
            // saving error
        }

    }

    render() {
        let { fadeText } = this.state

        return (
            <View style={styles.EnterCode}>
                <KeyboardAvoidingView style={styles.keyboard_container} behavior="position">
                    <View style={styles.main}>
                        <View style={styles.box_1} >
                            <Text style={styles.my_code} >
                                کد فعال سازی
                            </Text>
                            <View style={styles.resend_box}>
                                <TouchableOpacity
                                    style={styles.Resend}
                                    activeOpacity={.6}
                                    onPress={this._sendNumber}
                                >
                                    <Text style={styles.resend_text}  >ارسال مجدد</Text>
                                </TouchableOpacity>
                                <Text style={styles.my_number}>+{this.props.phone}9364918606</Text>
                            </View>
                        </View>

                        <View style={styles.box_2} >
                            <Text style={styles.activation_code_text} >
                                کد فعال سازی خود را وارد کنید
                            </Text>

                            <View style={styles.code_show_box}>
                                <TextInput
                                    autoFocus={true}
                                    onFocus={() => {this.setState({ bg: '#C72A54' })}}
                                    onBlur={() => {this.setState({ bg: '#dfdfdf' })}}
                                    placeholder="----"
                                    onChangeText={(e) => this.setState({ code: e.replace(/[^0-9]/g, '').trim() })}
                                    maxLength={4}
                                    style={[styles.code_input, { borderBottomColor: this.state.bg }]}
                                    keyboardType='numeric'
                                />

                            </View>


                            {/* E R R O R   box */}
                            {
                                this.state.wrongCode ?
                                    <Animated.Text style={[styles.wrong_animation,{ opacity: fadeText }]} >
                                        کد وارد شده اشتباه است
                            </Animated.Text> :
                                    <Text style={{ height: 20, marginTop: 20, }}></Text>

                            }
                        </View>



                        <GradientButton
                            width={Dimensions.get('window').width - 100}
                            press={this._goHome}
                            activeOpacity={.6}
                            color_1="#36a35b"
                            color_2="#6fcf97"
                            height={50}
                            borderRadius={50}
                            textColor="#fff"
                            size={16}
                            title="ورود"
                            top={20}
                            bottom={100}
                            isLoading={this.state.isLoading}
                        />

                    </View>

                </KeyboardAvoidingView>
            </View>



        );
    }
}




export default EnterCode; 