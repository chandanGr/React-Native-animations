import React, { Component } from 'react';
import {Animated, AppRegistry, StyleSheet, Text,  TouchableOpacity,
         View, Navigator, Image, Easing,
} from 'react-native';

const arr = []
for(var i = 0; i < 4; i++){
    arr.push(i);
}

export default class Two extends Component{

    constructor(){
        super();
        this.animatedvalue = [],
        arr.forEach((item) => {
            this.animatedvalue[item] = new Animated.Value(0)
        });


    }
    componentDidMount(){
        this.animate()
    }
    animate(){
        arr.forEach((item) => {
            this.animatedvalue[item].setValue(0);
        });
        const animation = function(value, duration, easing, delay = 0){
            return Animated.timing(value, {
                toValue : 1,
                duration : duration,
                easing : easing,
                delay : delay
            });
  
        }
        Animated.parallel([
        animation(this.animatedvalue[0], 4000, Easing.easeInExpo, 200),
        animation(this.animatedvalue[1], 4000, Easing.easeInCubic, 100),
        animation(this.animatedvalue[2], 3700, Easing.easeInElastic, 200),
        animation(this.animatedvalue[3], 4500, Easing.easeInBounce, 800),
        ]).start(() => this.animate());
    }

    render(){
        const MariotranslateX = this.animatedvalue[0].interpolate({
            inputRange : [0, 1],
            outputRange : [-100, 400]
        });
        const cloud1translateX = this.animatedvalue[1].interpolate({
            inputRange : [0, 1],
            outputRange : [400, -100]
        });
        const cloud2translateX = this.animatedvalue[2].interpolate({
            inputRange : [0, 1],
            outputRange : [400, -100]
        });
        const lugitranslateX = this.animatedvalue[3].interpolate({
            inputRange : [0, 1],
            outputRange : [-100, 400]
        });


        return(
            <View style = {styles.container}>
                <View style = {styles.sky}>
                    <Animated.View style = {{
                        transform : [{
                            translateX : cloud1translateX,
                        }]
                    }}>
                        <Image
                            style = {{width : 90, height : 70,}} 
                            source = {{uri : "https://raw.githubusercontent.com/iamshaunjp/css-animations-playlist/master/mario-examples/img/cloud.png"}} />
                    </Animated.View>
                    <Animated.View style = {{
                        transform : [{
                            translateX : cloud2translateX,
                        }]
                    }}>
                        <Image
                            style = {{width : 60, height : 50, opacity : 0.5, }} 
                            source = {{uri : "https://raw.githubusercontent.com/iamshaunjp/css-animations-playlist/master/mario-examples/img/cloud.png"}} />
                    </Animated.View>
                </View>
                <View style = {styles.grass}>

                </View>
                <View style = {styles.road}> 
                    <Animated.View 
                        style = {{
                            transform : [
                                {translateX : MariotranslateX }
                            ]
                        }}>
                        <Image 
                            style = {{width : 70, height : 70,}}
                            source = {{uri : "https://raw.githubusercontent.com/iamshaunjp/css-animations-playlist/master/mario-examples/img/mario.png"}}
                        />
                    </Animated.View>
                    <Animated.View
                        style = {{
                            transform : [{
                                translateX : lugitranslateX
                            }]
                        }}
                    >
                        <Image
                            style = {{width : 70, height : 70,}}   
                            source = {{uri : "https://raw.githubusercontent.com/iamshaunjp/css-animations-playlist/master/mario-examples/img/luigi.png"}} />
                    </Animated.View>
                </View>
            </View>
        );
    }
} 

const styles = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection : "column"
    },
    sky : {
        flex : 5,
        backgroundColor : "skyblue",
    },
    grass : {
        flex : 3,
        backgroundColor : "#52BE80"
    },
    road : {
        flex : 3,
        backgroundColor : "#454545",
        borderBottomWidth : 10,
        borderTopWidth : 10,
        borderColor : "#999999" 
    }
});