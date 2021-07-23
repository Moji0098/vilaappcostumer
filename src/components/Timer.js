import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { sprintf } from 'sprintf-js';

class TimerCutDown extends Component {
    static propTypes = {
        until: PropTypes.number.isRequired,
        afterEndOnChange: PropTypes.func,
        styles: PropTypes.shape({
            labelText: PropTypes.object,
            contentStyle: PropTypes.object,
            wrapperStyle: PropTypes.object
        })
    };
    static defaultProps = {
        until: 60, //2 * 60 * 60 + 3 // s
        styles: {}
    };

    constructor(props) {
        super(props);
        this.state = {
            ...this._getPropsData(props)
        };
    }

    _getPropsData = props => {
        return { until: Math.max(0, props.until) };
    };

    _cutDownFun = () => {
        if (this.state.until === 0) {
            this._afterEnd();
        } else {
            this.setState(preState => {
                return {
                    until: preState.until - 1
                };
            });
        }
    };

    startCutDownTime = () => {
        const { until } = this.state;
        // console.log('%c *******start********', 'color:red', this.state.until);
        if (until <= 0) {
            return;
        }
        this.stopCutDownTime();
        this.cutInterval = setInterval(this._cutDownFun, 1000);
    };

    restartCutDownTime = () => {
        this.stopCutDownTime();
        this.setState(
            (preState, props) => ({ until: Math.max(0, props.until) }),
            this.startCutDownTime
        );
    };

    stopCutDownTime = () => {
        // console.log('%c *******Stop********', 'color:red');
        this.cutInterval && clearTimeout(this.cutInterval);
    };

    _afterEnd = () => {
        const { afterEndOnChange } = this.props;
        // console.log('%c *******END*******', 'color:red');
        this.stopCutDownTime();
        typeof afterEndOnChange === 'function' && afterEndOnChange();
    };

    componentDidMount() {
        this.startCutDownTime();
    }



    componentWillUnmount() {
        this.stopCutDownTime();
    }

    getTimeData = until => {
        return {
            seconds: until % 60,
            minutes: parseInt(until / 60, 10) % 60,
            hours: parseInt(until / (60 * 60), 10) % 24,
            days: parseInt(until / (60 * 60 * 24), 10)
        };
    };

    formatTime = until => {
        const { seconds, minutes, hours, days } = this.getTimeData(until);
        return sprintf('%02d:%02d:%02d:%02d', days, hours, minutes, seconds).split(':');
    };

    _renderTimeText = val => {
        return val
    };

    _renderContent = () => {
        const { until } = this.state;
        // const { contentStyle, labelText } = this.props;
        const newTime = this.formatTime(until);
        return (
            <View style={[styles.content, this.props.contentStyle]}>
                {/* <Text style={styles.text}>{this._renderTimeText(newTime[0])}</Text> */}
                <View style={styles.time_box} >
                    <Text style={[styles.text, this.props.labelText]}>{this._renderTimeText(newTime[1])}</Text>
                    <Text style={{color:'#fff',width:2}}>:</Text>
                    <Text style={[styles.text, this.props.labelText]}>{this._renderTimeText(newTime[2])}</Text>
                    <Text style={{color:'#fff',width:2}}>:</Text>
                    <Text style={[styles.text, this.props.labelText]}>{this._renderTimeText(newTime[3])}</Text>
                </View>
                <View style={styles.time_box} >
                    <Text style={styles.time_title} >ساعت</Text>
                    <Text style={styles.time_title} >دقیقه</Text>
                    <Text style={styles.time_title} >ثانیه</Text>
                </View>
            </View>
        );
    };

    _footerContent = () => {
        return (
            <View>
                <TouchableOpacity
                    onPress={() => {
                        this.setState({ until: this.state.until }, this.restartCutDownTime);
                    }}
                    style={{ width: 200, height: 30, backgroundColor: 'green' }}
                >
                    <Text>reStart</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.stopCutDownTime}
                    style={{ width: 200, height: 30, backgroundColor: 'green' }}
                >
                    <Text>close</Text>
                </TouchableOpacity>
            </View>
        );
    };

    render() {
        const {
            styles: { wrapperStyle }
        } = this.props;
        return <View id={this.props.id} style={[styles.wrapper, wrapperStyle]}>{this._renderContent()}</View>;
    }
}

const styles = StyleSheet.create({
    wrapper: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // width: 10,
    },
    time_box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        // width: 18,
        // height: 36,
        // backgroundColor: 'rgba(165, 45, 83, 0.6)',
    },
    text: {
        fontFamily: 'ISFBold',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    time_title: {
        fontFamily: 'IS',
        fontSize: 7,
        color: '#fff',
        width:25,
        textAlign:"center"
    }
});

export default TimerCutDown;