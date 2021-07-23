import React, { Component } from 'react';
import {
    ImageBackground,
    Image,
    Text,
    View,
    Dimensions,
    TextInput,
    KeyboardAvoidingView,
    Animated
} from 'react-native';


import { Actions } from 'react-native-router-flux';
import PostToApi from '../controler/postToApi';


//components
import GradientButton from '../components/GradientButton';

//styles
import styles from '../styles/SendNumber';



class SendNumber extends Component {

    constructor(props) {
        super(props)
        this.state = {
            iranIcon: true,
            code: '+98',
            number: '',
            fadeText: new Animated.Value(1),
            wrongNumber: false,
            isLoading: false
        }
    }

   


    // country code onchange 
    _changeCode = (e) => {

        //just numbers and (+) have permission
        if (e.trim() === '+98') {
            this.setState({
                iranIcon: true,
                code: e.replace(/[^0-9\+]/g, '').trim()
            })
        } else {
            this.setState({
                iranIcon: false,
                code: e.replace(/[^0-9\+]/g, '').trim()
            })
        }
    }



    // mobile number onchange
    _changeNumber = (e) => {
        // just number has permission
        this.setState({
            number: e.replace(/[^0-9]/g, '').trim()
        })
    }




    // send code function
    _enterCode = async () => {




        if (this.state.number.length === 10) {
            this.setState({ isLoading: true })
            // merge code and user number 
            let sentNumber = this.state.code + this.state.number
            await this.setState({
                sentNumber: sentNumber.trim()
            })
            // this.props.onSendNumber(sentNumber);


            const data = new FormData();
            data.append('phone', this.state.sentNumber)

            const res = await PostToApi(data, 'auth/otp/sms');


            if (res.status === 200) {
                this.setState({ isLoading: false })
                console.log(res)

                // go to enter code page 
                Actions.EnterCode({
                    phone: res.data.phone,
                    code: res.data.code
                });

            } else {
                this.setState({ isLoading: false })

                // error message show
                // animation show permission 
                await this.setState({
                    wrongNumber: true,
                    errorText: res.error
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
                        wrongNumber: false,
                        fadeText: new Animated.Value(1),
                    })
                }, 5000)
            }






        } else {

            // animation show permission 
            await this.setState({
                wrongNumber: true,
                errorText: ' شماره همراه باید ۱۰ کارکتر باشد'
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
                    wrongNumber: false,
                    fadeText: new Animated.Value(1),
                })
            }, 5000)
        }
    }




    render() {

        let { fadeText } = this.state

        return (

            <View style={styles.send_number}>

                <ImageBackground style={styles.bg_image}
                    imageStyle={{ borderBottomRightRadius: 300 }}
                    source={require('./../../Assets/Images/sendNumber.png')}
                >

                    <KeyboardAvoidingView style={styles.send_number_key} behavior="position">
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <View style={styles.logo_box} >
                                <Image style={styles.logo} source={require('../../Assets/Images/logo1.png')} />
                            </View>
                        </View>

                        <View style={styles.number_inputs}>
                            <Text style={styles.number_inputs_title} >
                                شماره همراه خود را وارد نمایید
                            </Text>


                            <View style={styles.input_box} >
                                <View style={styles.iran_img} >
                                    <Image source={
                                        this.state.iranIcon ?
                                            require('../../Assets/Images/iran.png') :
                                            require('../../Assets/Images/national.png')
                                    } />

                                    <TextInput
                                        style={styles.input_box_1}
                                        onChangeText={(e) => this._changeCode(e)}
                                        value={this.state.code}
                                        keyboardType='numeric'
                                        value={this.state.code}
                                        maxLength={4} 
                                    />

                                </View>





                                <TextInput
                                    style={styles.input_box_2}
                                    onChangeText={(e) => this._changeNumber(e)}
                                    value={this.state.number}
                                    keyboardType='numeric'
                                    textContentType="telephoneNumber"
                                    maxLength={10} 

                                />

                            </View>


                        </View>

                        {
                            this.state.wrongNumber ?
                                <Animated.Text style={[styles.fade_text,{opacity: fadeText}]} >
                                    {this.state.errorText}
                                </Animated.Text> :
                                <Text style={{ height: 20, paddingHorizontal: 20, marginTop: 5, }}></Text>

                        }



                        <GradientButton
                            width={Dimensions.get('window').width - 100}
                            // press={this._enterCode}
                            press={()=>Actions.EnterCode()}
                            activeOpacity={.6}
                            color_1="#18749a"
                            color_2="#46add8"
                            height={50}
                            borderRadius={50}
                            textColor="#fff"
                            size={16}
                            title="ارسال"
                            top={20}
                            bottom={100}
                            isLoading={this.state.isLoading}
                        />


                    </KeyboardAvoidingView>


                </ImageBackground>
            </View>



        );
    }
}








export default SendNumber;