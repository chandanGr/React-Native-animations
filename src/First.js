import React, { Component } from 'react';
import {Animated, AppRegistry, StyleSheet, Text,  TouchableOpacity,
         View, StackNavigator, Navigator, Button,
} from 'react-native';

export default class First extends Component{
    
    _onPress(){
        this.props.navigator.push({
            id : "Index"
        });
    }

    render(){
        return(
            <View>
                <TouchableOpacity style = {styles.Button} onPress = {this._onPress.bind(this)}>
                    <Text>
                        go back to home
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    Button : {
        height : 20,
        width : 500,
        backgroundColor : "skyblue"
    }
});