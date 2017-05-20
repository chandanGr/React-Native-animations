import React, { Component } from 'react';
import {Animated, AppRegistry, StyleSheet, Text,  TouchableOpacity,
         View, Navigator, Image, Easing,
} from 'react-native';

export default class Third extends Component{
    
    constructor(props){
        super(props);
        this.animateValue = new Animated.Value(0);    
    }   
    componentDidMount(){
     this.animate()   
    }
    animate(){
        this.animateValue.setValue(0);
        Animated.spring(this.animateValue, {
            toValue : 1, 
            friction : 1,
        }).start(() => this.animate());
    }
    BackPress(){
        this.props.navigator.push({
            id : "Index"
        });
    }

    render(){
        return(
            <View style = {{justifyContent : "center", alignItems : "center", flex : 1}}>
                <TouchableOpacity style = {styles.Button} onPress = {this.BackPress.bind(this)}>
                    <Text>
                        go back to home
                    </Text>
                </TouchableOpacity>
                <Animated.Image
                    style = {{width : 247, height : 220, transform : [{scale : this.animateValue}]}}
                    source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}
                >
                </Animated.Image>
            </View>
        );
    }
} 
var styles = StyleSheet.create({
    Button : {
        height : 40,
        width : 500,
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : "skyblue"
    }
});