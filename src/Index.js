import React, { Component } from 'react';
import {Animated, AppRegistry, StyleSheet, Text,  TouchableOpacity,
         View, StackNavigator, Navigator, Button, ScrollView,
} from 'react-native';
import First from "./First"

export default class Index extends Component{
    
    on_PressFirst(){
        this.props.navigator.push({
            id : "First"
        });
    }
    _onPressSecond(){
        this.props.navigator.push({
            id : "Second"
        });
    }
    _onPressThird(){
        this.props.navigator.push({
            id : "Third"
        });
    }
    _onPressFourth(){
        this.props.navigator.push({
            id : "Fourth"
        });
    }

    render(){
        return(
           // <ScrollView>
                <View style = {styles.container}>
                <TouchableOpacity 
                    style = {styles.FirstAnimation}
                    onPress = {this.on_PressFirst.bind(this)}
                    >
                    <Text style = {styles.TextFont}>
                        Animated.timing
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style = {styles.SecondAnimation}
                    onPress = {this._onPressSecond.bind(this)}
                    >
                    <Text style = {styles.TextFont}>
                        Animated timing examples
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity             
                    style = {styles.ThirdAnimation}
                    onPress = {this._onPressThird.bind(this)}  
                >
                    <Text style = {styles.TextFont}>
                        Animated.spring
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity             
                    style = {styles.FourthAnimation}
                    onPress = {this._onPressFourth.bind(this)}  
                >
                    <Text style = {styles.TextFont}>
                        Animated.parallel
                    </Text>
                </TouchableOpacity>
            </View>
         //   </ScrollView>
        );
    }
}

var styles = StyleSheet.create({
    container : {
        flex : 1,
    },
    FirstAnimation : {
        flex : 1,
        backgroundColor : "#3498DB",
        justifyContent : "center",
        alignItems : "center",
    },
    SecondAnimation : {
        flex : 1,
        backgroundColor : "#2ECC71",
        justifyContent : "center",
        alignItems : "center",  
        paddingLeft : 50    
    },
    ThirdAnimation : {
        flex : 1,
        backgroundColor : "#E67E22",
        justifyContent : "center",
        alignItems : "center",
    },
    TextFont : {
        fontSize : 35,
        color : "white"
    },
    FourthAnimation : {
        flex : 1,
        backgroundColor : "#BDC3C7",
        justifyContent : "center",
        alignItems : "center",
    },
});