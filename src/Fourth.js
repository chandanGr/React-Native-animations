import React, { Component } from 'react';
import {Animated, AppRegistry, StyleSheet, Text,  TouchableOpacity,
         View, Navigator, Image, Easing,
} from 'react-native';

export default class Fourth extends Component{
    
    constructor(props){
        super(props);
        this.animatedValue1 = new Animated.Value(0);
        this.animatedValue2 = new Animated.Value(0);
        this.animatedValue3 = new Animated.Value(0);
    }
    componentDidMount(){
        this.animate()
    }
    animate(){
        this.animatedValue1.setValue(0);
        this.animatedValue2.setValue(0);
        this.animatedValue3.setValue(0);

        const animateFunction = function(value, duration, easing, delay = 0){
            return Animated.timing(value, {
                toValue : 1, 
                duration : duration,
                easing : easing, 
                delay : delay
            });
        }

        Animated.parallel([ 
        animateFunction(this.animatedValue1, 3000, Easing.linear),
        animateFunction(this.animatedValue2, 2000, Easing.linear, 2000),
        animateFunction(this.animatedValue3, 2000, Easing.linear, 4000),
        ]).start();
    }

    _onpress(){
        this.animate()
    }
    
    render(){
        const scaleView = this.animatedValue1.interpolate({
            inputRange : [0, 0.5, 1],
            outputRange : [1, 2, 1]
        });
        const spintext = this.animatedValue2.interpolate({
            inputRange : [0, 0.5, 1],
            outputRange : ["0deg", "360deg", "720deg"],
        });
        const scaleText = this.animatedValue2.interpolate({
            inputRange : [0, 0.5, 1],
            outputRange : [1, 3, 1],
        });
        const topMargin = this.animatedValue3.interpolate({
            inputRange : [0, 1],
            outputRange : [-400, 150],
        });
        return(
            <View style = {{flex : 1, alignItems : "center"}}>
                <Animated.View 
                    style = {{
                        transform : [{scale : scaleView}], 
                        width : 100, 
                        height : 100, 
                        marginTop : 50,
                        backgroundColor : "red",
                        justifyContent : "center",
                        alignItems : "center"
                    }}
                >
                    <Text>
                        Welocome!!!
                    </Text>
                </Animated.View>
                <Animated.View 
                style = {{
                    transform : [{rotate : spintext}, {scale  : scaleText}],
                    marginTop : 50,
                }}>
                    <Text>
                        this is a Text
                    </Text>
                </Animated.View>
                <Animated.View style = {{marginTop : topMargin, marginRight : 200}}>
                    <TouchableOpacity 
                        style = {{
                            width : 200, 
                            height : 50, 
                            position : "absolute", 
                            backgroundColor : "#AF7AC5",  
                            justifyContent : "center", 
                            alignItems : "center",
                            }}
                        onPress = {this._onpress.bind(this)}
                    >
                        <Text>
                            this is a Button
                        </Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        );
    }
}