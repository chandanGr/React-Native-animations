import React, { Component } from 'react';
import {Animated, AppRegistry, StyleSheet, Text,  TouchableOpacity,
         View, Navigator, Image, Easing,
} from 'react-native';

const arr = []
for(var i = 0; i < 200; i++){
    arr.push(i);
}

export default class Fifth extends Component{
    
    constructor(){
        super();
        this.animatedValue = []

        arr.forEach((value) => {
            this.animatedValue[value] = new Animated.Value(0);
        })
    }
    componentDidMount(){
        this.animate()
    }
    animate(){
        const animations = arr.map((item) => {
            return Animated.timing(this.animatedValue[item], {
                toValue : 1,
                duration : 4000,
                delay : 10
            })
        })
        Animated.sequence(animations).start();
    }
    
    render(){
        const animation = arr.map((a, i) => {
            return (<Animated.View key = {i} style = {{opacity : this.animatedValue[a], height : 40, width : 40, backgroundColor : "red", marginTop : 5, marginLeft : 5}}/>);
        });
        return(
            <View style = {{flexDirection : "row", flex : 1, flexWrap : "wrap"}}>
                {animation}
            </View>
        );
    }
}