import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacity,
    ScrollView,
    Modal,
    SafeAreaView,
    TextInput,
    KeyboardAvoidingView
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import ImageSlider from 'react-native-image-slider';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MapView, { Marker } from 'react-native-maps';


//components 
import GradientButton from '../components/GradientButton';

//style
import styles from '../styles/Details';



const arrowDown = <Icon style={{ top: -10 }} name="chevron-down" size={36} color="#ccc" />
const arrowUp = <Icon style={{ top: -10 }} name="chevron-up" size={36} color="#ccc" />




export default class Details extends Component {

    constructor(props) {
        super(props)
        this.state = {
            paymentModal: false,
            rulesModal: false,
            rulesAccept: false,
            availabilityText: 'بیشتر',
            availability: false,
            aboutvilaText: 'بیشتر',
            aboutvila: false,
            conditionsText: 'بیشتر',
            conditions: false,
            sliderFullScreen: false,
            markers: [
                { latitude: 35.68925, longitude: 51.3890, latitudeDelta: 0, longitudeDelta: 0, },
            ],
            imageSliderModal: false
        }
    }


    _backToResultImage = () => {
        Actions.ResultItemsPage()
    }


    _saveVila = () => {
        this.setModalVisible(false)

    }


    // more funcion 
    _seeMore = (name, text) => {

        if (!this.state[name]) {
            this.setState({
                [text]: 'کمتر',
                [name]: true,
            })
        } else {
            this.setState({
                [text]: 'بیشتر',
                [name]: false,
            })
        }
    }





    render() {

        const images = [
            'https://placeimg.com/640/640/nature',
            'https://placeimg.com/640/640/people',
            'https://placeimg.com/640/640/animals',
            'https://placeimg.com/640/640/beer',
        ];

        // map marker
        const marker = (
            this.state.markers.map(marker => (
                <Marker coordinate={marker} key={marker.latitude}>
                    <Text style={styles.custom_merker} ></Text>
                </Marker>
            ))
        )

        return (

            <View style={styles.Details} >

                {/* header */}

                <View style={styles.header} >
                    <Text style={styles.owner_answer}>پذیرفته شده</Text>
                    <TouchableOpacity style={styles.back_button} onPress={() => Actions.pop()} >
                        <Icon name="chevron-right" size={36} color="#fff" />
                    </TouchableOpacity>
                </View>


                {/* slider and others  */}
                <ScrollView>

                    <SafeAreaView >
                        <ImageSlider
                            loopBothSides
                            images={images}
                            customSlide={({ index, item, style, width }) => (
                                <TouchableOpacity key={index}
                                    activeOpacity={1}
                                    // style={style}
                                    onPress={() => this.setState({ imageSliderModal: true })}>
                                    <Image source={require('../../Assets/Images/vilainfo.jpg')}
                                        // source={{ uri: item }}
                                        style={styles.villa_info_img} />
                                </TouchableOpacity>
                            )}
                            customButtons={(position, move) => (
                                <View style={styles.image_container}>
                                    <View style={styles.image_slider_detail}>
                                        <Text style={styles.image_counter}>{position + 1}  /  {images.length}</Text>
                                        <Icon name="image-area" style={{ marginLeft: 8 }} size={30} color="#fff" />
                                    </View>

                                    {/* price and back button fullscreen and resize mode */}
                                    <View style={styles.villa_price}>
                                        <Text style={styles.price_text}>150,000 ت</Text>
                                    </View>

                                </View>
                            )}
                        />
                    </SafeAreaView>

                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={this.state.imageSliderModal}
                        onRequestClose={() => {
                            this.setState({ imageSliderModal: false })
                        }}>
                        <SafeAreaView style={styles.image_slider_modal}>
                            <ImageSlider
                                loopBothSides
                                images={images}
                                customSlide={({ index, item, style, width }) => (
                                    <TouchableOpacity key={index}
                                        activeOpacity={1}
                                        style={[style, {
                                            backgroundColor: '#000',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            height: '100%'
                                        }]}
                                        onPress={() => this.setState({ imageSliderModal: false })}>
                                        <Image source={require('../../Assets/Images/vilainfo.jpg')}
                                            // source={{ uri: item }}
                                            style={style.modal_image} />
                                    </TouchableOpacity>
                                )}
                                customButtons={(position, move) => (
                                    <View style={styles.modal_image_box}>
                                        <View style={styles.modal_image_detail}>
                                            <Text style={styles.image_counter}>{position + 1}  /  {images.length}</Text>
                                            <Icon name="image-area" style={{ marginLeft: 8 }} size={30} color="#fff" />
                                        </View>

                                        {/* price and back button fullscreen and resize mode */}

                                        <TouchableOpacity
                                            style={styles.modal_back_btn}
                                            onPress={() => this.setState({ imageSliderModal: false })}>
                                            <Icon name="chevron-right" size={36} color="#fff" />
                                        </TouchableOpacity>


                                    </View>
                                )}
                            />
                        </SafeAreaView>
                    </Modal>




                    <View style={styles.container_detail}>

                        {/* icons */}
                        <View style={styles.vila_posibilities}>
                            <View style={styles.posibility}>
                                <Text style={styles.posibility_text}>3 اتاق </Text>
                                <View style={styles.posibility_icon_box} >
                                    <View style={styles.door_icon_box} >
                                        <Text style={styles.door_handler} ></Text>
                                    </View>

                                </View>
                            </View>
                            <View style={styles.posibility}>
                                <Text style={styles.posibility_text}>2 تخت </Text>
                                <View style={styles.posibility_icon_box} >
                                    <Icon name="bed-empty" size={15} color="#636363" />
                                </View>
                            </View>
                            <View style={styles.posibility}>
                                <Text style={styles.posibility_text}>1 نفر</Text>
                                <View style={styles.posibility_icon_box} >
                                    <Icon name="account-group" size={15} color="#636363" />
                                </View>
                            </View>
                            <View style={styles.posibility}>
                                <Text style={styles.posibility_text}>45 متر </Text>
                                <View style={styles.posibility_icon_box} >
                                    <Icon name="home" size={15} color="#636363" />
                                </View>
                            </View>
                        </View>

                        <View style={styles.about_vila}>
                            <View style={styles.about_vila_first}>
                                <Text style={styles.detail_title} >در مورد ویلا</Text>
                                <Text style={styles.about_vila_text} >ويلا سه خوابه نوساز با امكانات کامل نزديك ساحل و در منطقه توریستی گردشگری سیترا (پلاژحسینی) قرار گرفته است،</Text>
                                {
                                    this.state.aboutvila ?
                                        <Text style={styles.about_vila_text} >سه کولره ، سیستم گرمایش پکیج دوبلکس، دسترسی راحت و آسان به مراکز خرید فاصله تا ساحل دریا کمتراز یک دقیقه میزبان شما مهمانان گرامی می باشد.این ویلا به مسافران عراقی اجاره داده نمیشود ازشاخصه های قابل ذکر این واحد دارابودن سه کولر گازی دراین ویلا میباشد که درگرما وشرجی بودن هوای شمال بسیار دلچسب خواهد بود ضمنا دارابودن دو حمام اب گرم هم ذاره که یکی از حمام ها مستر(داخل اطاق خواب) هست</Text>
                                        : null
                                }

                            </View>
                            <TouchableOpacity
                                style={{ marginTop: 10, alignItems: 'center' }}
                                onPress={(e) => this._seeMore('aboutvila', 'aboutvilaText')}
                            >
                                <Text style={styles.arrow_text} >{this.state.aboutvilaText}</Text>
                                {this.state.aboutvila ? arrowUp : arrowDown}
                            </TouchableOpacity>
                        </View>


                        <View style={styles.availability} >
                            <Text style={styles.detail_title} >امکانات </Text>
                            <View style={styles.availability_first}>
                                <View style={styles.availability_item} >
                                    <Text style={styles.availability_text} >پارکینگ</Text>
                                    <Icon style={{ marginLeft: 5 }} size={15} name="check-circle-outline" color="#6FCF97" />
                                </View>
                                <View style={styles.availability_item} >
                                    <Text style={styles.availability_text} >WiFi</Text>
                                    <Icon style={{ marginLeft: 5 }} size={15} name="check-circle-outline" color="#6FCF97" />
                                </View>
                                <View style={styles.availability_item} >
                                    <Text style={styles.availability_text} >لباسشویی</Text>
                                    <Icon style={{ marginLeft: 5 }} size={15} name="check-circle-outline" color="#bbb" />
                                </View>
                                <View style={styles.availability_item} >
                                    <Text style={styles.availability_text} >سیستم گرمایشی</Text>
                                    <Icon style={{ marginLeft: 5 }} size={15} name="check-circle-outline" color="#6FCF97" />
                                </View>
                                <View style={styles.availability_item} >
                                    <Text style={styles.availability_text} >الکتریکی</Text>
                                    <Icon style={{ marginLeft: 5 }} size={15} name="check-circle-outline" color="#6FCF97" />
                                </View>
                                <View style={styles.availability_item} >
                                    <Text style={styles.availability_text} >استخر</Text>
                                    <Icon style={{ marginLeft: 5 }} size={15} name="check-circle-outline" color="#6FCF97" />
                                </View>
                                {
                                    this.state.availability ?
                                        <View style={styles.availability_first}>
                                            <View style={styles.availability_item} >
                                                <Text style={styles.availability_text} >پارکینگ</Text>
                                                <Icon style={{ marginLeft: 5 }} size={15} name="check-circle-outline" color="#6FCF97" />
                                            </View>
                                            <View style={styles.availability_item} >
                                                <Text style={styles.availability_text} >WiFi</Text>
                                                <Icon style={{ marginLeft: 5 }} size={15} name="check-circle-outline" color="#6FCF97" />
                                            </View>
                                            <View style={styles.availability_item} >
                                                <Text style={styles.availability_text} >لباسشویی</Text>
                                                <Icon style={{ marginLeft: 5 }} size={15} name="check-circle-outline" color="#bbb" />
                                            </View>
                                            <View style={styles.availability_item} >
                                                <Text style={styles.availability_text} >سیستم گرمایشی</Text>
                                                <Icon style={{ marginLeft: 5 }} size={15} name="check-circle-outline" color="#6FCF97" />
                                            </View>
                                            <View style={styles.availability_item} >
                                                <Text style={styles.availability_text} >الکتریکی</Text>
                                                <Icon style={{ marginLeft: 5 }} size={15} name="check-circle-outline" color="#6FCF97" />
                                            </View>

                                        </View> : null

                                }
                            </View>

                            <TouchableOpacity
                                style={{ marginTop: 10, alignItems: 'center' }}
                                onPress={() => this._seeMore('availability', 'availabilityText')}
                            >
                                <Text style={styles.arrow_text} >{this.state.availabilityText}</Text>
                                {this.state.availability ? arrowUp : arrowDown}
                            </TouchableOpacity>
                        </View>

                        <View style={styles.conditions}>
                            <Text style={styles.detail_title}>شرایط</Text>

                            <Text style={styles.conditions_text}>1. آرام باشید و مراقب خودتان باشید.</Text>
                            <Text style={styles.conditions_text}>2. عاشق خودتان باشید .</Text>
                            <Text style={styles.conditions_text}>3. اتاق را کثیف نکنید </Text>
                            <Text style={styles.conditions_text}>4. اتاق را تمیز نکنید . </Text>


                            {this.state.conditions ?
                                <View>

                                    <Text style={styles.conditions_text}>5. مواظب اطراف باشید </Text>
                                    <Text style={styles.conditions_text}>6. داخل اتاق سیگار نکشید . </Text>
                                    <Text style={styles.conditions_text}>7. دقت کنید </Text>
                                    <Text style={styles.conditions_text}>8. نماز اول وقت را فراموش نکنید </Text>
                                    <Text style={styles.conditions_text} >9. خدا را ناظر بر اعمال خود بدانید </Text>
                                </View> : null}
                            <TouchableOpacity
                                style={{ marginTop: 10, alignItems: 'center' }}
                                onPress={() => this._seeMore('conditions', 'conditionsText')}
                            >
                                <Text style={styles.arrow_text} >{this.state.conditionsText}</Text>
                                {this.state.conditions ? arrowUp : arrowDown}
                            </TouchableOpacity>

                        </View>

                        <View
                            style={styles.map_box}
                        >
                            <MapView
                                style={{ flex: 1 }}
                                mapType="standard"
                                minZoomLevel={5}
                                // scrollEnabled={false}
                                initialRegion={this.state.markers[0]}
                                maxZoomLevel={15}
                            >
                                {marker}
                            </MapView>
                        </View>

                        <View style={styles.save_button}>

                            <GradientButton
                                width="80%"
                                press={() => {
                                    this.setState({ paymentModal: true })
                                }}
                                activeOpacity={.6}
                                color_1="#36a35b"
                                color_2="#6fcf97"
                                height={50}
                                borderRadius={50}
                                textColor="#fff"
                                size={16}
                                title="رزرو نهایی"
                                top={0}
                                bottom={0}
                            />
                        </View>


                    </View>



                    {/* M O D A L  modal MODAL  */}

                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.paymentModal}
                        onRequestClose={() => this.setState({ paymentModal: false })}
                    >
                        <KeyboardAvoidingView behavior="position">

                            {/* Close modal  */}
                            <View
                                style={styles.payment_modal_close}>
                                {/* Close modal  */}
                                <TouchableOpacity
                                    onPress={() => this.setState({ paymentModal: false })}>
                                    <Icon size={45} name="close" color="#bbb" />
                                </TouchableOpacity>
                            </View>



                            {/* Modal modal modal modal  */}
                            <View style={styles.Modal}>
                                <View style={styles.modal_title} >
                                    <View style={styles.icon_parent} >
                                        <View style={styles.icon_child} >
                                            <Image style={styles.icon} source={require('../../Assets/Images/user.png')} />
                                        </View>
                                    </View>
                                    <View style={styles.person_desc} >
                                        <Text style={styles.person_name} >علی تقوی</Text>
                                    </View>
                                </View>

                                <View style={styles.rent_detail} >

                                    <View style={{ flexDirection: 'column', borderRadius: 5 }} >


                                        <View style={styles.rent_rows} >
                                            <View style={[styles.rent_items, { paddingHorizontal: 10 }]} >
                                                <Text style={styles.rent_number} >1398 / 12 / 15</Text>
                                                <Text style={styles.rent_text} >تاریخ خروج</Text>
                                            </View>
                                            <View style={[styles.rent_items, { paddingHorizontal: 10 }]} >
                                                <Text style={styles.rent_number} >1398 / 12 / 05</Text>
                                                <Text style={styles.rent_text} >تاریخ ورود</Text>
                                            </View>
                                        </View>
                                        <View style={styles.rent_rows}>
                                            <View style={[styles.rent_items, { paddingHorizontal: 10 }]} >
                                                <Text style={styles.rent_number} >5</Text>
                                                <Text style={styles.rent_text} >تعداد شبها</Text>
                                            </View>
                                            <View style={[styles.rent_items, { paddingHorizontal: 10 }]} >
                                                <Text style={styles.rent_number} >3</Text>
                                                <Text style={styles.rent_text} >نفرات</Text>
                                            </View>
                                        </View>

                                        <View style={styles.rent_rows}>
                                            <View style={styles.totalـprice} >
                                                <Text style={styles.total_number} >500,000 ت</Text>
                                                <Text style={styles.total_text} >هزینه کل</Text>
                                            </View>
                                            <View style={[styles.rent_items, { paddingRight: 10 }]} >
                                                <Text style={styles.rent_number} >100,000 ت</Text>
                                                <Text style={styles.rent_text} >میانگین هر شب</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.rent_inputs} >
                                        <View style={styles.input_box}>
                                            <TextInput
                                                style={styles.form_inputs}
                                                onChangeText={(countryCode) => this.setState({ countryCode })}
                                                placeholder="نام تحویل گیرنده"
                                            />
                                        </View>
                                        <View style={styles.input_box}>
                                            <TextInput
                                                style={styles.form_inputs}
                                                onChangeText={(countryCode) => this.setState({ countryCode })}
                                                placeholder="کد ملی تحویل گیرنده"
                                                keyboardType='numeric'
                                            />
                                        </View>
                                    </View>
                                    <View style={styles.rent_inputs} >
                                        <View style={styles.input_box}>
                                            <TextInput
                                                style={styles.form_inputs}
                                                onChangeText={(countryCode) => this.setState({ countryCode })}
                                                placeholder="شماره تلفن اول"
                                                keyboardType='numeric'
                                            />
                                        </View>
                                        <View style={styles.input_box}>
                                            <TextInput
                                                style={styles.form_inputs}
                                                onChangeText={(countryCode) => this.setState({ countryCode })}
                                                placeholder="شماره تلفن دوم ( اختیاری )"
                                                keyboardType='numeric'
                                            />
                                        </View>
                                    </View>


                                </View>

                                <View style={styles.condition_box_btn} >
                                    <TouchableOpacity
                                        style={styles.condition_btn}
                                        activeOpacity={.6}
                                        onPress={() => this.setState((prev) => { return { rulesAccept: !prev.rulesAccept } })}
                                    >
                                        <Text style={{ fontSize: 10, fontFamily: 'ISBold', marginRight: 5 }} >قوانین و مقررات را  میپذیرم </Text>
                                        <View style={styles.condition_accept_icon} >
                                            {
                                                this.state.rulesAccept ?
                                                    <Icon size={18} name="check" color="#18749a" />
                                                    : <Icon size={0} name="check" color="transparent" />
                                            }

                                        </View>

                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.read_condition}
                                        onPress={() => this.setState({ rulesModal: true })}
                                    >
                                        <Text style={styles.read_condition_text} >مطالعه ی قوانین و مقررات </Text>

                                        <Icon size={18} name="book-open-page-variant" color="#18749a" />
                                    </TouchableOpacity>
                                </View>

                                {/* request btn */}

                                <GradientButton
                                    width="90%"
                                    press={() => alert('رفتن به صفحه پرداخت')}
                                    activeOpacity={.6}
                                    color_1="#18749a"
                                    color_2="#46add8"
                                    height={50}
                                    borderRadius={50}
                                    textColor="#fff"
                                    size={16}
                                    title="پرداخت"
                                    top={20}
                                    bottom={100}
                                />
                            </View>

                            <Modal
                                animationType="fade"
                                transparent={true}
                                visible={this.state.rulesModal}
                                onRequestClose={() => this.setState({ rulesModal: false })}

                            >
                                <View style={styles.condition_container} >
                                    <View style={styles.condition_box} >

                                        <TouchableOpacity
                                            style={{ alignItems: 'flex-end', width: '100%' }}
                                            onPress={() => this.setState({ rulesModal: false })}>
                                            <Icon size={45} name="close" color="#a52d53" />
                                        </TouchableOpacity>

                                        <ScrollView style={{ padding: 10 }}>
                                            <View style={{ paddingBottom: 50 }} >
                                                <Text style={styles.rule_text}>
                                                    <Text  >1.  </Text>
                                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                            </Text>
                                                <Text style={styles.rule_text}>
                                                    <Text  >2.  </Text>
                                                    چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                                            </Text>
                                                <Text style={styles.rule_text}>
                                                    <Text  >3.  </Text>
                                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                            </Text>
                                                <Text style={styles.rule_text}>
                                                    <Text  >4.  </Text>
                                                    کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                                            </Text>
                                                <Text style={styles.rule_text}>
                                                    <Text  >5.  </Text>
                                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                            </Text>
                                                <Text style={styles.rule_text}>
                                                    <Text  >6.  </Text>
                                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                            </Text>
                                                <Text style={styles.rule_text}>
                                                    <Text  >7.  </Text>
                                                    در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                            </Text>
                                                <Text style={styles.rule_text}>
                                                    <Text  >8.  </Text>
                                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                            </Text>
                                                <Text style={styles.rule_text}>
                                                    <Text  >9.  </Text>
                                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                            </Text>
                                                <Text style={styles.rule_text}>
                                                    <Text  >10.  </Text>
                                                    در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                            </Text>
                                                <Text style={styles.rule_text}>
                                                    <Text  >11.  </Text>
                                                    لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.
                                            </Text>

                                                <TouchableOpacity onPress={() => this.setState((prevState) => {
                                                    return {
                                                        rulesAccept: !prevState.rulesAccept
                                                    }
                                                })}
                                                    style={{ flexDirection: 'row', justifyContent: 'flex-end', marginVertical: 15, alignItems: 'center' }} >
                                                    <Text style={{ textAlign: 'right', fontFamily: 'ISFBold', color: '#a52d53', fontSize: 14 }}>قوانین و مقررات را میپذیرم </Text>
                                                    {
                                                        this.state.rulesAccept ?
                                                            <Icon style={{ marginLeft: 5 }} size={30} name="clipboard-check-outline" color="#a52d53" />
                                                            : <Icon style={{ marginLeft: 5 }} size={30} name="clipboard-outline" color="#aaa" />

                                                    }
                                                </TouchableOpacity>

                                                <View style={{ flexDirection: 'row', width: '100%', justifyContent: "space-between" }} >
                                                    <GradientButton
                                                        width="34%"
                                                        press={() => this.setState({ rulesAccept: false, rulesModal: false })}
                                                        color_2="#C50143"
                                                        color_1="#C50143"
                                                        height={40}
                                                        borderRadius={10}
                                                        textColor="#fff"
                                                        size={16}
                                                        title="نمی پذیرم"
                                                    />
                                                    <GradientButton
                                                        width="60%"
                                                        press={() => this.setState({ rulesAccept: true, rulesModal: false })}
                                                        color_1="#63CB8E"
                                                        color_2="#63CB8E"
                                                        height={40}
                                                        borderRadius={10}
                                                        textColor="#fff"
                                                        size={16}
                                                        title="می پذیرم"
                                                    />
                                                </View>

                                            </View>
                                        </ScrollView>
                                    </View>
                                </View>

                            </Modal>

                        </KeyboardAvoidingView>

                    </Modal >
                </ScrollView >
            </View>



        );
    }
}




