import React, { Component } from 'react';
import {Animated, AppRegistry, StyleSheet, Text, ScrollView, TouchableOpacity,
         View, Navigator, Image, Easing,
} from 'react-native';

const arr = []
for(var i = 0; i < 310; i++){
    arr.push(i);
}

export default class Sixth extends Component{
    
    constructor(){
        super();
        this.animatedVlaue = []
        const animations = arr.forEach((value) => {
            this.animatedVlaue[value] = new Animated.Value(0);
        });
    }

    componentDidMount(){
        this.animate()
    }
    
    animate(){
        const animation = arr.map((item) => {
            return Animated.timing(this.animatedVlaue[item], {
                toValue : 1, 
                duration : 2000,
            });
        });
        Animated.stagger(10, animation).start();
    }
    render(){
        const animations = arr.map((a, i) => {
            return (<Animated.View key = {i} style = {{ width : 30, height : 30, backgroundColor : "skyblue", opacity : this.animatedVlaue[a], marginLeft : 6, marginTop : 3}}/>);
        });
        return(
            <ScrollView vertical>
            <View style = {{flex : 1, flexDirection : "row", flexWrap : "wrap"}}>
                {animations}
            </View>
            </ScrollView>
        );
    }
}