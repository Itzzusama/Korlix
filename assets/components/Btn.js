import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Btn = ({BtnStyle, title, onPress}) => {

  return (
    <TouchableOpacity style={[styles.buttonContainer, BtnStyle]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'black',
    borderRadius: 15,
    width: '90%',
    paddingVertical: 25,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  disabledButtonContainer: {
    backgroundColor: '#DADADA',
  },
  disabledButtonText: {
    color: '#AFAFAF',
  },
  
});

export default Btn;
