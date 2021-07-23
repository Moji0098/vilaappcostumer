import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    TextInput,
    KeyboardAvoidingView,
    NativeModules,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//components 
import GradientButton from '../components/GradientButton';
import { Call, Email } from 'react-native-openanything';


//styles
import styles from '../styles/Support';



// import ImagePicker from 'react-native-image-picker';
var ImagePicker = NativeModules.ImageCropPicker;


// images for upload
var imgs = []




export default class Support extends Component {

    constructor(props) {
        super(props)
        this.state = {
            image: [],
            images: [],

        }
    }



    // multi select image
    _pickMultiple = () => {

        ImagePicker.openPicker({
            waitAnimationEnd: true,
            includeExif: true,
            forceJpg: true,
            mediaType: 'photo'
        }).then(images => {
            imgs.push({ uri: images.path, width: images.width, height: images.height, mime: images.mime });
            this.setState({
                image: null,
                images: [...imgs]
            });
            // console.log('received image', imgs);

        }).catch(e => false);
    }




    // show selected images
    renderAsset(image) {

        // return <Image  style={styles.images_box} source={image} />

        return <ImageBackground style={styles.images_box} imageStyle={{ borderRadius: 10 }} source={image}>
            <View style={{
                backgroundColor: '#fffe',
                padding: 5,
                position: 'absolute',
                top: 5,
                right: 5,
                borderRadius: 50
            }}>
                <Icon name="delete" size={20} color="red" />

            </View>
        </ImageBackground>
    }


    // delete selected images
    _deleteImage = (key) => {
        for (let i = 0; i < imgs.length; i++) {
            if (imgs[i].uri === key) {
                imgs.splice(imgs[i], 1)
            }
        }
        this.setState({
            image: null,
            images: imgs
        });

    }

    _call = () => {
        Call('+989111111111')
    }
    _email = () => {
        Email('test@gmail.com')
    }


    render() {

        return (
            <KeyboardAvoidingView style={styles.support_key} behavior="padding">


                <View style={styles.Support}>




                    {/* call to and email ot  */}
                    <View style={styles.account_form}>
                        <View style={styles.call_email_container} >

                            <TouchableOpacity activeOpacity={.9}
                                style={[styles.call_email_box, { backgroundColor: 'rgba(217, 48, 37, .3)' }]}
                                onPress={this._email}>
                                <Text style={[styles.call_email_text, { color: '#d93025' }]} >ایمیل</Text>
                                <Icon name="email" size={18} color="#d93025" />
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={.9}
                                style={[styles.call_email_box, { backgroundColor: 'rgba(58, 130, 255, 0.3)' }]}
                                onPress={this._call}>
                                <Text style={[styles.call_email_text, { color: '#3A82FF' }]} >تماس</Text>
                                <Icon name="phone" size={18} color="#3A82FF" />
                            </TouchableOpacity>

                        </View>


                        <TextInput
                            style={styles.form_inputs}
                            onChangeText={(countryCode) => this.setState({ countryCode })}
                            placeholder="عنوان"
                        />
                        <TextInput
                            style={styles.form_textarea}
                            onChangeText={(countryCode) => this.setState({ countryCode })}
                            placeholder="توضیحات"
                            multiline
                        />

                        <View style={styles.add_images_boxes} >
                            <View style={styles.image_container}>
                                <ScrollView contentContainerStyle={{
                                    flexDirection: 'row-reverse',
                                    flexWrap: 'wrap',
                                    minWidth: '100%',
                                    justifyContent: 'flex-start'
                                }}>
                                    {this.state.images ? this.state.images.map(i => <TouchableOpacity onPress={() => this._deleteImage(i.uri)} key={i.uri}>{this.renderAsset(i)}</TouchableOpacity>) : null}
                                    {
                                        this.state.images.length < 2 ?
                                            < TouchableOpacity style={styles.images_box} onPress={() => this._pickMultiple()} activeOpacity={.8} >
                                                <Icon style={styles.select_image} name="image-outline" />
                                                <Text style={{
                                                    fontSize: 10,
                                                    fontFamily: 'ISBold',
                                                    color: '#636363'
                                                }} >افزودن عکس</Text>
                                            </TouchableOpacity> : null}
                                </ScrollView>

                            </View>

                        </View>
                    </View>



                    <GradientButton
                        width='90%'
                        press={this._saveInfo}
                        activeOpacity={.6}
                        color_1="#36a35b"
                        color_2="#6fcf97"
                        height={50}
                        borderRadius={50}
                        textColor="#fff"
                        size={16}
                        title="فرستادن"
                        top={50}
                        bottom={0}
                    />



                </View>
            </KeyboardAvoidingView >



        );
    }
}

