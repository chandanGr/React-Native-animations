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
import Second from "./src/Second"

export default class animation extends Component {

  navigationRenderScene(route, navigator){
    _navigator = navigator;
    switch(route.id){
      case "Index":
        return (<Index navigator = {navigator} title = "animations" />);
      case "First":
        return (<First navigator = {navigator} title = "First animation" />);
      case "Second":
        return (<Second navigator = {navigator} title = "Second animation" />);
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
