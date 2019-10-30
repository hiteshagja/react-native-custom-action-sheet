import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({text, onPress, color}) => (
  <TouchableOpacity activeOpacity={1} style={styles.button} onPress={onPress}>
    <Text style={[styles.buttonText, {color: color || '#0069d5'}]}>{text}</Text>
  </TouchableOpacity>
);

var styles = StyleSheet.create({
  buttonText: {
    color: '#0069d5',
    alignSelf: 'center',
    fontSize: 18,
  },
  button: {
    height: 50,
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
});

export default Button;
