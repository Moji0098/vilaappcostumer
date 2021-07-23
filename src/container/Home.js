import React, { Component } from 'react';
import {
    Text,
    View,
    DrawerLayoutAndroid,
    Image,
    TouchableOpacity,
    BackHandler,
    ScrollView,
    Modal,
    ToastAndroid
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import RangeSlider from 'rn-range-slider';
import { IndicatorViewPager, PagerTitleIndicator } from 'rn-viewpager';
import JalaliCalendarPicker from 'react-native-jalali-calendar-picker';

//components 
import NoRequest from '../components/NoRequest';
import Requestitems from '../components/RequestItems';
import Counter from '../components/Counter';
import Header from '../components/Header';
import LoadingPage from '../components/LoadingPage';


//styles
import styles from '../styles/Home';



var moment = require('moment-jalaali')
moment().format('jYYYY/jM/jD')

const Toast = (props) => {
    if (props.visible) {
        ToastAndroid.show(
            props.message,
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            25,
            50,
        );
        return null;
    }
    return null;
};




class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            filterModal: false,
            miniModal: false,
            calendarModal: false,
            calendarBox: false,
            city: 'انتخاب کنید',
            cities: ['آمل', 'بابل', 'کیش'],
            selectStart: false,
            nights: 1,
            persons: 1,
            priceLow: 50000,
            priceHigh: 1000000,
            tab: [true, false, false],
            active: 'rgba(255,255,255,.1)',
            inactive: 'transparent',
            newRequestBtn: true,
            requests: [],
            offset: {},
            nextPageLoading: false,
            exitBtnCounter: 0,
            visible: false

        };
    }



    //click humberger menu to open drawer
    _openDrawer = () => {
        this.refs['DRAWER_REF'].openDrawer();
    }


    componentDidMount() {
        // for disable back btn
        BackHandler.addEventListener('hardwareBackPress', () => this._handleBackButton());

    }


    //custom back button
    _handleBackButton = async () => {
        if (this.state.exitBtnCounter === 0 && (Actions.currentScene === 'Home' || Actions.currentScene === 'SendNumber')) {
            await this.setState({
                exitBtnCounter: 1,
                visible: true
            })
            console.log(this.state.exitBtnCounter)
        } else if (this.state.exitBtnCounter > 0 && (Actions.currentScene === 'Home' || Actions.currentScene === 'SendNumber')) {
            this.setState({ visible: false })
            BackHandler.exitApp()
        } else {
            Actions.pop()
        }
        return true;
    }



    //drawer menu actions
    _navigate = (path) => {
        Actions[path]()
        this.refs['DRAWER_REF'].closeDrawer();
    }



    // log out
    _exit = () => {
        this._removeData()
        Actions.reset('SendNumber')
    }
    _removeData = async () => {
        try {
            await AsyncStorage.removeItem('@token')
            return true;
        } catch (e) {
            return false
        }
    }





    // got to vila cases
    _showRequestsNavigate = () => {
        Actions.ResultItemsPage()
    }




    // open date picker and set date
    _startDateOpen = async () => {
        this.refs['STARTPICKER'].showPicker()
        this.setState({ selectStart: true })
    }



    // select city on filter
    _selectCity = (city) => {
        this.setState({
            city: city,
            miniModal: false
        })
    }

    //date picker change
    _onDateChange = (date) => {
        this.setState({
            selectedStartDate: date,
        });
        this._calendarModal()
    }

    //calendar 
    _calendarModal = () => {
        if (this.state.calendarModal) {
            this.setState({
                calendarModal: false,
                calendarBox: false,
            })
        } else {
            this.setState({
                calendarModal: true,
                calendarBox: true,
            })
        }
    }

    // night and opacity 
    _setProps = async (name, val) => {
        await this.setState({
            [name]: val
        })
    }

    //price 
    _onChangePrice = (low, high, fromUser) => {
        this.setState({ priceLow: low, priceHigh: high })
    }


    // open filter open 
    _requestModalOpen = async () => {
        await this.setState({ filterModal: true })
    }


    // filter btn 
    _request = async () => {
        let { requests } = this.state
        requests.push({
            city: this.state.city,
            selectedStartDate: this.state.selectedStartDate.format('jYYYY/jM/jD'),
            nights: this.state.nights,
            persons: this.state.persons,
            priceLow: this.state.priceLow,
            priceHigh: this.state.priceHigh

        })
        await this.setState({ requests, filterModal: false })
    }




    //sort tab 
    _changeTab = (tab) => {
        this.setState({
            tab: tab
        })
    }



    // run when scroll requests and show hide new request button 
    onScroll = async (event) => {
        var currentOffset = event.nativeEvent.contentOffset.y;
        var direction = currentOffset > this.state.offset ? 'down' : 'up';

        if (direction === 'down') {
            await this.setState({ newRequestBtn: false, offset: currentOffset })
        } else {
            await this.setState({ newRequestBtn: true, offset: currentOffset })
        }

    }

    // show hide request when horizontal scroll requests 
    _renderTitleIndicator() {
        return <PagerTitleIndicator
            style={styles.indicator_box}
            itemStyle={styles.indicator}
            itemTextStyle={styles.indicator_text}
            selectedItemTextStyle={styles.indicator_text_selected}
            titles={['منقضی شده', 'رزرو شده', 'درخواست های فعال']}
            selectedBorderStyle={{ backgroundColor: '#A52D53' }}
        />;
    }


    render() {

        // drawer menu 
        const navigationView = (
            <View style={styles.navigationView}>
                <View style={styles.navigationView_box} >
                    <View style={styles.icon_parent} >
                        <Image style={styles.icon} source={require('../../Assets/Images/mahtab.jpeg')} />
                    </View>
                    <View style={styles.person_desc} >
                        <Text style={styles.person_name} >سارا نایینی</Text>
                    </View>
                </View>


                <TouchableOpacity activeOpacity={.6} style={styles.bottom_icons} onPress={() => this._navigate('Profile')}>
                    <Text style={styles.drawer_text}>پروفایل</Text>
                    <Icon name="account-outline" size={24} color="#A52D53" />
                </TouchableOpacity>

                {/* got to Archives */}
                <TouchableOpacity activeOpacity={.6} style={styles.bottom_icons} onPress={() => this._navigate('Archives')}>
                    <Text style={styles.drawer_text}>آرشیو</Text>
                    <Icon name="calendar-clock" size={24} color="#A52D53" />
                </TouchableOpacity>

                {/* got to support */}
                <TouchableOpacity activeOpacity={.6} style={styles.bottom_icons} onPress={() => this._navigate('Support')}>
                    <Text style={styles.drawer_text}>پشتیبانی</Text>
                    <Icon name="face-agent" size={24} color="#A52D53" />
                </TouchableOpacity>

                {/* got to about us */}
                <TouchableOpacity activeOpacity={.6} style={styles.bottom_icons} onPress={() => this._navigate('AboutUs')}>
                    <Text style={styles.drawer_text}>درباره ما</Text>
                    <Icon name="information-outline" size={24} color="#A52D53" />
                </TouchableOpacity>

                {/* got to rules */}
                <TouchableOpacity activeOpacity={.6} style={styles.bottom_icons} onPress={() => this._navigate('Rules')}>
                    <Text style={styles.drawer_text}>قوانین و مقررات</Text>
                    <Icon name="book-open-page-variant" size={24} color="#A52D53" />
                </TouchableOpacity>

                {/* EXIT */}
                <TouchableOpacity activeOpacity={.6} style={styles.bottom_icons} onPress={this._exit}>
                    <Text style={styles.drawer_text}>خروج</Text>
                    <Icon name="exit-to-app" size={24} color="#A52D53" />
                </TouchableOpacity>
            </View>
        );
        const { selectedStartDate } = this.state

        const startDate = selectedStartDate ? selectedStartDate.format('jYYYY/jM/jD') : '';



        let requests = this.state.requests.map((values, i) => {
            return < Requestitems
                navigate={this._showRequestsNavigate}
                id={i}
                key={i}
                city={values.city}
                startTime={values.selectedStartDate}
                persons={values.persons}
                minPrice={values.priceLow}
                maxPrice={values.priceHigh}
            />

        })


        const cities = this.state.cities.map((city, i) => {
            return <TouchableOpacity
                key={i}
                style={styles.picker_button}
                activeOpacity={.3}
                onPress={() => this._selectCity(city)}>
                <Text style={styles.picker_item} >{city}</Text>
            </TouchableOpacity>
        })



        return (
            <DrawerLayoutAndroid
                drawerWidth={250}
                ref={'DRAWER_REF'}
                drawerPosition={DrawerLayoutAndroid.positions.Right}
                renderNavigationView={() => navigationView}
                onDrawerOpen={(e) => { this._openDrawer.bind(this) }}
            >

                <Toast style={{ fontFamily: 'ISBold' }} visible={this.state.visible} message="برای خروج دوباره فشار دهید" />



                <View style={styles.home_cover} >

                    {/* HEADER   HEADER   HEADER */}
                    <Header title="درخواست های من"
                        leftIcon="bell-outline"
                        leftPress={() => {
                            Actions.Notifications()
                        }}
                        rightPress={() => this._openDrawer()}
                        iconColor="#A52D53"
                        notification={true}
                        home={true}
                    />

                    {/* float BUTTON */}
                    {
                        this.state.newRequestBtn ?
                            <TouchableOpacity activeOpacity={.9}
                                style={styles.new_request_btn}
                                onPress={this._requestModalOpen}>
                                <LinearGradient
                                    start={{ x: 1, y: 1 }}
                                    end={{ x: 1, y: 0 }}
                                    colors={['hsla(341, 57%, 50%, 1)', '#A52D53']}
                                    style={styles.new_request_linear}>
                                    <Text style={{
                                        fontFamily: 'ISFBold',
                                        fontSize: 12,
                                        color: '#fff',
                                    }} >درخواست جدید     </Text>
                                    <Icon style={{ marginLeft: 10 }} name="plus" size={30} color="#fff" />
                                </LinearGradient>
                            </TouchableOpacity> : null
                    }


                    {/* request box  */}
                    <View style={styles.up} >
                        <IndicatorViewPager
                            style={{
                                width: '100%',
                                flexDirection: 'column-reverse',
                                backgroundColor: '#A52D53',
                                height: '100%',
                            }}
                            initialPage={2}
                            indicator={this._renderTitleIndicator()}>

                            <View style={styles.tab_box} >
                                <ScrollView onScroll={this.onScroll} contentContainerStyle={styles.requestBox} >
                                    {this.state.requests.length > 0 ? requests : <NoRequest press={this._requestModalOpen} />}

                                </ScrollView>
                            </View>


                            <View style={styles.tab_box} >
                                <ScrollView onScroll={this.onScroll} contentContainerStyle={styles.requestBox} >
                                    {this.state.requests.length > 0 ? requests : <NoRequest press={this._requestModalOpen} />}
                                </ScrollView>
                            </View>


                            <View style={styles.tab_box} >

                                <ScrollView onScroll={this.onScroll}
                                    contentContainerStyle={styles.requestBox} >
                                    {this.state.requests.length > 0 ? requests : <NoRequest press={this._requestModalOpen} />}
                                </ScrollView>
                            </View>

                        </IndicatorViewPager>

                    </View>












                </View>





                {/* MODAL */}

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.filterModal}
                    onRequestClose={() => {
                        this.setState({ filterModal: false })
                    }}>

                    <View style={styles.modal_box} >
                        {/* Close modal  */}


                        {/* Modal Body */}
                        <View style={styles.modal_body} >
                            {/* Close modal  */}
                            <View
                                style={styles.title_box}>
                                {/* <View style={styles.title_child}> */}

                                {/* </View> */}
                                <Text style={styles.modal_title}>
                                    درخواست جدید
                                            </Text>
                                <TouchableOpacity
                                    onPress={() => { this.setState({ filterModal: false }) }}
                                    style={{ position: 'absolute', right: 30 }}>
                                    <Icon size={36} name="chevron-right" color="#A52D53" />
                                </TouchableOpacity>

                            </View>

                            <View style={styles.modal_form} >
                                {/* places */}
                                <TouchableOpacity
                                    style={styles.modal_boxes}
                                    onPress={() => this.setState({ miniModal: true })}
                                    activeOpacity={.9}
                                >
                                    <View style={styles.city_text_box}>
                                        <Icon size={22} style={{ position: 'absolute', left: 2 }} name="chevron-down" color="#636363" />
                                        <Text
                                            style={{ fontSize: 12, color: '#555', padding: 10, fontFamily: 'ISMedium', width: '100%', textAlign: 'center' }}
                                        >{this.state.city}</Text>
                                    </View>
                                    <View style={styles.right_icon_box}>
                                        <Text style={{
                                            fontSize: 12,
                                            fontFamily: 'ISBold',
                                            alignItems: 'center',
                                            color: '#636363'
                                        }}>موقعیت مکانی  </Text>
                                        <Icon style={{ marginLeft: 5 }} size={22} name="map-marker-outline" color="#636363" />
                                    </View>

                                    {/* modal for select city  */}
                                    <Modal
                                        animationType="fade"
                                        transparent={true}
                                        visible={this.state.miniModal}
                                        onRequestClose={() => {
                                            this.setState({ miniModal: false })
                                        }}>
                                        <TouchableOpacity style={styles.picker_modal} activeOpacity={1} onPress={() => this.setState({ miniModal: false })} >
                                            <View style={styles.picker_box}>
                                                <ScrollView
                                                    contentContainerStyle={{
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                    }}
                                                    style={{ width: '100%' }}>
                                                    {cities}
                                                </ScrollView>
                                            </View>
                                        </TouchableOpacity>
                                    </Modal>
                                </TouchableOpacity>



                                {/* date */}
                                <TouchableOpacity style={styles.modal_boxes} activeOpacity={.9} onPress={() => this._calendarModal()} >
                                    <View style={styles.date_box} >
                                        <View style={styles.select_date} >
                                            <View style={styles.date_view}>
                                                {
                                                    startDate ?
                                                        <View style={styles.date_text_box} >
                                                            <Icon size={22} style={styles.date_icons} name="chevron-down" color="#636363" />
                                                            <Text style={styles.show_selected_date}>{startDate}</Text>
                                                        </View> :

                                                        <View style={styles.date_text_box} >
                                                            <Icon size={22} style={styles.date_icons} name="chevron-down" color="#636363" />
                                                            <Text style={styles.show_selected_date_text}> انتخاب کنید</Text>
                                                        </View>
                                                }

                                            </View>
                                        </View>
                                        <View style={styles.right_icon_box} >
                                            <Text style={styles.enter_time}>تاریخ ورود </Text>
                                            <Icon style={{ marginLeft: 5 }} size={22} name="calendar-range" color="#636363" />
                                        </View>
                                    </View>


                                </TouchableOpacity>

                                {/* nights */}
                                <View style={styles.modal_boxes}>
                                    <Counter
                                        name="nights"
                                        _returnValue={this._setProps}
                                        val={this.state.nights} />

                                    <View style={styles.capacity} >
                                        <Text style={styles.modal_titles} >مدت اقامت </Text>
                                        <Icon style={{ marginLeft: 5 }} size={22} name="weather-night" color="#636363" />
                                    </View>
                                </View>

                                {/* capacity  */}
                                <View style={styles.modal_boxes}>
                                    <Counter
                                        name="persons"
                                        _returnValue={this._setProps}
                                        val={this.state.persons} />

                                    <View style={styles.capacity} >
                                        <Text style={styles.modal_titles} >تعداد </Text>
                                        <Icon style={{ marginLeft: 5 }} size={22} name="account-group-outline" color="#636363" />
                                    </View>
                                </View>

                                {/* price */}
                                <View style={styles.price_box}>

                                    <View style={styles.price_parent} >

                                        <View style={styles.low_price} >

                                            <Text style={styles.price_text}>{this.state.priceLow}</Text>

                                            <Text style={styles.price_text}>{this.state.priceHigh}</Text>
                                        </View>
                                        <RangeSlider
                                            gravity="top"
                                            style={{ width: '100%', height: 20 }}
                                            gravity={'center'}
                                            min={50000}
                                            max={1000000}
                                            step={50000}
                                            initialLowValue={this.state.priceLow}
                                            initialHighValue={this.state.priceHigh}
                                            thumbColor="#A52D53"
                                            thumbBorderColor="#A52D53"
                                            selectionColor="#A52D53"
                                            blankColor="#ccc"
                                            labelStyle="none"
                                            thumbWidth={100}
                                            onValueChanged={(low, high) => this._onChangePrice(low, high)} />
                                    </View>
                                    <View style={styles.price_limit} >

                                        <View style={styles.price} >
                                            <Text style={styles.tooman} >(تومان) </Text>
                                            <Text style={styles.modal_titles} >محدوده قیمت  </Text>
                                            <Icon style={{ marginLeft: 5 }} size={22} name="cash" color="#555" />
                                        </View>
                                    </View>


                                </View>


                            </View>


                            {/* request btn */}
                            <View style={styles.new_request_box}>
                                <View style={styles.search_touch}>
                                    <TouchableOpacity style={styles.send_req}
                                        activeOpacity={.7}
                                        onPress={() => this._request()}
                                    >
                                        <Text style={styles.send_req_text} >ثبت درخواست</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.search_touch_sibling}></View>
                            </View>




                        </View>




                        {/*modal select date  */}

                        <Modal
                            animationType="fade"
                            transparent={true}
                            visible={this.state.calendarModal}
                            onRequestClose={() => {
                                this.setState({ calendarModal: false })
                            }}>
                            <TouchableOpacity style={styles.modal_jalai}
                                onPress={() => {
                                    this.setState({
                                        calendarModal: false,
                                        calendarBox: false,
                                    })
                                }}
                            >
                                <View style={styles.jalali_box} >
                                    <JalaliCalendarPicker
                                        onDateChange={(date) => this._onDateChange(date)}
                                        textStyle={{ fontFamily: 'ISFBold' }}
                                        todayBackgroundColor="#ccc"
                                        selectedDayTextColor="#fff"
                                        selectedDayColor="#A52D53"
                                        disabledDates={date => console.log(date)}
                                        disableTodayStyling={{ color: 'yellow', backgroundColor: 'purple' }}
                                        minDate={new Date()}
                                    // disabledDates={}
                                    />

                                </View>
                            </TouchableOpacity>
                        </Modal>
                    </View>

       
                </Modal>

            </DrawerLayoutAndroid >


        );
    }
}


export default Home