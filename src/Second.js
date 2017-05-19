import React, { Component } from 'react';
import {Animated, AppRegistry, StyleSheet, Text,  TouchableOpacity,
         View, Navigator, Image, Easing,
} from 'react-native';

export default class Second extends Component{
    
    constructor(props){
        super(props);
        this.animatedValue = new Animated.Value(0);
    }

    componentDidMount(){
        this.animate()
    }
    animate(){
        this.animatedValue.setValue(0);
        Animated.timing(this.animatedValue, {
            toValue : 1,
            duration : 2000,
            easing : Easing.linear,
        }).start(() => this.animate());
    }
    _onPress(){
        this.props.navigator.push({
            id : "Index"
        });
    }
    render(){
        const marginLeft = this.animatedValue.interpolate({
            inputRange : [0, 0.2, 0.8, 1],
            outputRange : [0, 100, 250, 0],
        });
        const marginFromLeft = this.animatedValue.interpolate({
            inputRange : [0, 1],
            outputRange : [0, 250],
        });
        const opacity = this.animatedValue.interpolate({
            inputRange : [0, 0.5, 1],
            outputRange : [0, 1, 0],
        });
        const rotateX = this.animatedValue.interpolate({
            inputRange : [0, 0.5, 1],
            outputRange : ["-180deg", "0deg", "-180deg"],
        });
        const TextSize = this.animatedValue.interpolate({
            inputRange : [0, 0.5, 1],
            outputRange : [18, 50, 18],
        });
        return(
            <View style = {styles.container}>
                <Animated.View
                    style = {{
                        marginLeft : marginLeft,
                        height : 100,
                        width : 100,
                        backgroundColor : "red",
                    }}
                />
                <View style = {{paddingTop : 0, marginTop : 0}}>
                    <TouchableOpacity 
                        onPress = {this._onPress.bind(this)}
                        style = {{
                            width : 400,
                            height : 40,
                            backgroundColor : "skyblue",
                            marginTop : 0,
                            justifyContent : "center",
                            alignItems : "center"
                        }}
                    >
                        <Text>
                            go back to home
                        </Text>
                    </TouchableOpacity>
                </View>
                <Animated.View 
                    style = {{
                        width : 100,
                        height : 100,
                        opacity : opacity,
                        marginLeft : marginLeft,
                        backgroundColor : "skyblue"
                    }}
                />
                <Animated.View 
                    style = {{
                        width : 100,
                        height : 100,
                        opacity : opacity,
                        marginLeft : marginFromLeft,
                        backgroundColor : "orange"
                    }}
                />
                <Animated.Text 
                    style = {{
                        fontSize : TextSize
                    }}
                >
                    heyyyyy
                </Animated.Text>
                <Animated.View 
                    style = {{
                        width : 100,
                        height : 100,
                        transform : [{rotateX}],
                        marginLeft : marginFromLeft,
                        backgroundColor : "orange",
                        justifyContent : "center",
                        alignItems : "center"
                    }}
                >
                    <Text style = {{justifyContent : "center", alignItems : "center"}}>
                        Rotating
                    </Text>
                </Animated.View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container : {
        flex : 1,
        marginTop : 50
    }
});