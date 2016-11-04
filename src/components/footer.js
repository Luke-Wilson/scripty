import React, { Component } from 'react';
import { Text, View, Dimensions, TouchableHighlight } from 'react-native';

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  
  navigate(routeName) {
    if (this.props.lesson && routeName === 'Home') {
      return
    }
    if (this.props.profile && routeName === 'Profile') {
      return
    }
      this.props.navigator.push({name:routeName});
  }

  render() {
    const {  footerStyle, lightTextStyleLeft, lightTextStyleRight } = styles;
    return (
    <View style={footerStyle}>
      <Text onPress={this.navigate.bind(this, 'Home')} style={lightTextStyleLeft}>Lessons</Text>
      <Text onPress={this.navigate.bind(this, 'Profile')} style={lightTextStyleRight}>Profile</Text>
    </View>
    )
  }
};

const coral = '#FA848A'
const darkCoral = '#DE757A'
const grey = '#FAFAFA'

const styles = {
  footerStyle: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#FA848A',
    height: 60,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  },
  lightTextStyleLeft: {
    paddingRight: 150,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  lightTextStyleRight: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
}

export default Footer;
