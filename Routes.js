import React from 'react';

import { Router, Scene, Actions } from 'react-native-router-flux';
import { View, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import SendNumber from './src/container/SendNumber';
import EnterCode from './src/container/EnterCode';
import Home from './src/container/Home';
import Profile from './src/container/Profile';
import Support from './src/container/Support';
import ResultItemsPage from './src/container/ResultItemsPage';
import Details from './src/container/Details';
import AboutUs from './src/container/AboutUs';
import Rules from './src/container/Rules';
import Archives from './src/container/Archives';
import Notifications from './src/container/Notifications';
import Test from './src/container/Test';
import Splash from './src/components/SplashScreen';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



//back button
const backButton = () => (
    <TouchableOpacity
        onPress={() => Actions.pop()}
        style={{
            width: 60,
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        <View >
            <Icon size={36} name="chevron-right" color="#A52D53" />
        </View>
    </TouchableOpacity>
);


//pass nothing 
const nothing = () => { return <View /> }





class Routes extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            logged: false,
            loading: true,
        };
    }


    componentDidMount = async () => {
        self = this;
        await AsyncStorage.getItem('@token')
            .then((value) => {
                if (value != null) {
                    this.setState({
                        logged: true,
                        loading: false,
                    });
                } else {
                    this.setState({
                        loading: false,
                    })
                }
            }
            );

        if (this.state.logged) {
            Actions.Home()
        } else {
            Actions.SendNumber()
        }
    };

    render() {
        if (this.state.loading) {
            return <Splash />
        }
        return (
            < Router >
                <Scene key="root" >
                   <Scene key="SendNumber"
                        component={SendNumber}
                        title=""
                        hideNavBar={true}
                    // initial={!this.state.logged}

                    />
                    <Scene key="EnterCode"
                        component={EnterCode}
                        title=""
                        titleStyle={{ color: 'transparent' }}
                        renderRightButton={() => backButton()}
                        renderBackButton={() => nothing()}
                        navigationBarStyle={styles.login_style_bar}
                        sceneStyle={styles.login_scene_style}

                    />

                    <Scene key="Home"
                        component={Home}
                        title=""
                        hideNavBar={true}
                    // initial={this.state.logged}
                    // initial={true}

                    />

                    <Scene key="ResultItemsPage"
                        component={ResultItemsPage}
                        title=""
                        titleStyle={{ color: 'transparent' }}
                        renderBackButton={() => nothing()}
                        renderRightButton={() => nothing()}
                        navigationBarStyle={styles.login_style_bar_detail}

                    />


                    <Scene key="Profile"
                        component={Profile}
                        title="پروفایل"
                        titleStyle={styles.title_style}
                        renderRightButton={() => backButton()}
                        renderBackButton={() => nothing()}
                        navigationBarStyle={styles.login_style_bar}
                    />

                  
                    <Scene key="Support"
                        component={Support}
                        title="پشتیبانی"
                        titleStyle={styles.title_style}
                        renderRightButton={() => backButton()}
                        renderBackButton={() => nothing()}
                        navigationBarStyle={styles.login_style_bar}
                        sceneStyle={styles.login_scene_style}
                    />


                    <Scene key="Details"
                        component={Details}
                        title=""
                        titleStyle={{ color: 'red' }}
                        renderBackButton={() => nothing()}
                        renderRightButton={() => nothing()}
                        navigationBarStyle={styles.login_style_bar_detail}
                        sceneStyle={styles.login_scene_style}
                    />

                    <Scene key="AboutUs"
                        component={AboutUs}
                        title="درباره ما"
                        titleStyle={styles.title_style}
                        renderRightButton={() => backButton()}
                        renderBackButton={() => nothing()}
                        navigationBarStyle={styles.login_style_bar}
                    />

                    <Scene key="Rules"
                        component={Rules}
                        title="قوانین و مقررات"
                        titleStyle={styles.title_style}
                        renderRightButton={() => backButton()}
                        renderBackButton={() => nothing()}
                        navigationBarStyle={styles.login_style_bar}
                    />

                    <Scene key="Archives"
                        component={Archives}
                        title="آرشیو"
                        titleStyle={styles.title_style}
                        renderRightButton={() => backButton()}
                        renderBackButton={() => nothing()}
                        navigationBarStyle={styles.login_style_bar}
                    />

                    <Scene key="Notifications"
                        component={Notifications}
                        title="اعلانات"
                        titleStyle={styles.title_style}
                        renderRightButton={() => backButton()}
                        renderBackButton={() => nothing()}
                        navigationBarStyle={styles.login_style_bar}
                    /> 

                    <Scene key="Test"
                        component={Test}
                        title=""
                        hideNavBar={true}
                    />



                </Scene>
            </Router >
        )

    }

}

export default Routes;

const styles = ({
    login_style_bar: {
        backgroundColor: '#eee',
        elevation: 0,
        height: 50,
    },
    login_style_bar_detail: {
        backgroundColor: 'transparent',
        shadowColor: "#f7f7f7",
        elevation: 0,
        height: 0,
    },
    bell: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    notification: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#B22850',
        start: 10,
        top: -10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    notification_text: {
        color: '#fff',
        fontSize: 9,
        fontFamily: 'ISFMedium',
    },

    notification_box: {
        width: 40,
        height: 40,
        left: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bell: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    notification: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#B22850',
        start: 10,
        top: -10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    notification_text: {
        color: '#fff',
        fontSize: 9,
        fontFamily: 'ISFMedium',
    },
    title_style:{
        color: '#333', 
        paddingRight: 20, 
        fontFamily: 'ISBold', 
        textAlign: 'right', 
        width: '100%', 
        fontSize: 16
    }

})