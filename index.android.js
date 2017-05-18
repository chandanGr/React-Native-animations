/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Animated, LayoutAnimation, Easing, AppRegistry, StyleSheet, Text, Image, TouchableOpacity,
         View, StackNavigator, Navigator, Button,
} from 'react-native';
import Index from "./src/Index"
import First from "./src/First"

export default class animation extends Component {

 /* constructor(props){
    super(props);
    this.state = {
      bounceValue : new Animated.Value(0.8),
    };
  }

  _onPressMin () {

    Animated.spring(this.state.bounceValue,{
      toValue : .5,
      friction : 2.4
    }).start();
  }

  _onPressMax () {

    Animated.spring(this.state.bounceValue,{
      toValue :  1,
      friction : 2.4
    }).start();
  }

  render() {
    return(
      <View style = {style.container}>
        <TouchableOpacity onPress = {this._onPressMin.bind(this)}>
          <Text>
            press here 
          </Text>
        </TouchableOpacity>
        <Animated.Image
           style={{
              width : 300,
              height : 10,
              flex : 1,
              transform : [{
                scale : this.state.bounceValue
              }]
            }}
          source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
        />
        <TouchableOpacity onPress = {this._onPressMax.bind(this)}>
          <Text>
            press here 
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

}*/

  navigationRenderScene(route, navigator){
    _navigator = navigator;
    switch(route.id){
      case "Index":
        return (<Index navigator = {navigator} title = "animations "/>);
      case "First":
        return(<First navigator = {navigator} title = "First animation" />);
    }
  }

  render(){
    return (
      <Navigator
        initialRoute = {{
          id : "Index"
        }}
        renderScene = {
          this.navigationRenderScene
        }
      />
    );
  }

}

var style = StyleSheet.create({
  container : {
    justifyContent : "center",
    alignItems : "center",
    backgroundColor : "#ffff",
    marginTop : 50,
    flex : 1
  },
  circle : {
    backgroundColor : "skyblue",
    borderRadius : 100,
  }
});


AppRegistry.registerComponent('animation', () => animation);
