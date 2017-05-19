import React, { Component } from 'react';
import {Animated, AppRegistry, StyleSheet, Text,  TouchableOpacity,
         View, StackNavigator, Navigator, Button,
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

    render(){
        return(
            <View style = {styles.container}>
                <TouchableOpacity 
                    style = {styles.FirstAnimation}
                    onPress = {this.on_PressFirst.bind(this)}
                    >
                    <Text style = {styles.TextFont}>
                        First Animation --->
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style = {styles.SecondAnimation}
                    onPress = {this._onPressSecond.bind(this)}
                    >
                    <Text style = {styles.TextFont}>
                        Second Animation --->
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity             
                    style = {styles.ThirdAnimation}
                    onPress = {this._onPressThird.bind(this)}  
                >
                    <Text style = {styles.TextFont}>
                        Third Animation --->
                    </Text>
                </TouchableOpacity>
            </View>
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
    }
});