import React, { Component } from 'react';
import {Animated, AppRegistry, StyleSheet, Text,  TouchableOpacity,
         View, Navigator, Image, Easing,
} from 'react-native';

export default class First extends Component{
    
    constructor(props){
        super(props);
        this.spinValue = new Animated.Value(0);    
    }
    componentDidMount(){
        this.spin()
    }
    spin(){
        this.spinValue.setValue(0)
        Animated.timing(this.spinValue, {
            toValue : 1,
            duration : 3000,
            easing : Easing.linear
        }).start(() => this.spin());
    }
    _onPress(){
        this.props.navigator.push({
            id : "Index"
        });
    }

    render(){
        const spinValue = this.spinValue.interpolate({
            inputRange : [0, 1],
            outputRange : ["0deg", "360deg"],
        });
        return(
            <View style = {styles.container}>
                <TouchableOpacity style = {styles.Button} onPress = {this._onPress.bind(this)}>
                    <Text>
                        go back to home
                    </Text>
                </TouchableOpacity>
                <Animated.Image 
                style = {{
                    width : 225,
                    height : 200,
                    padding : 20,

                    transform : [{rotate : spinValue}]
                }}
                source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}
                />

            </View>
        );
    }
}

var styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
    Button : {
        height : 40,
        width : 500,
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : "skyblue"
    }
});