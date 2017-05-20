import React, { Component } from 'react';
import {Animated, AppRegistry, StyleSheet, Text,  TouchableOpacity,
         View, StackNavigator, Navigator, Button, ScrollView,
} from 'react-native';

export default class One extends Component{
    
    constructor(){
        super();
        this.animatedValue = new Animated.Value(0);
    }

    animate(){
        this.animatedValue.setValue(0);

        Animated.timing(this.animatedValue, {
            toValue : 1, 
            duration : 300,
        }).start();
    }
    _onPress(){
        this.animate()
    }


    render(){
        const rotate = this.animatedValue.interpolate({
            inputRange : [0, 1],
            outputRange : ["0deg", "20deg"]
        });
        const translateX = this.animatedValue.interpolate({
            inputRange : [0, 1],
            outputRange : [0, 200]
        });
        const translateY = this.animatedValue.interpolate({
            inputRange : [0, 1],
            outputRange : [0, 150]
        });

        return(
            <TouchableOpacity onPress = {this._onPress.bind(this)} style = {{flex : 1}}>
                <View style = {{felx : 1}}>
                    <View style = {{marginTop : 10, marginLeft : 10, height : 120, width : 120, backgroundColor : "#999", position : "absolute", justifyContent : "center", alignItems : "center"}}>
                        <TouchableOpacity style = {{height : 100, width : 100, backgroundColor : "#ddd"}}>
                            <Text>
                                press to close
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <Animated.View 
                        style = {{
                            backgroundColor : "pink", 
                            height : 100, 
                            width : 100, 
                            margin : 20,
                            border : 10, 
                            borderColor : "#999",
                            transform : [{rotate : rotate}, 
                                        {translateX : translateX}, 
                                        {translateY : translateY}
                            ],
                        }}>
                    </Animated.View>
                </View>
            </TouchableOpacity>
        );
    }
}
