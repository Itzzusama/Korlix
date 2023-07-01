import {StyleSheet, Text, View, Button, ImageBackground} from 'react-native';
import React from 'react';
import Chat from '../Chat';
import Header from '../../components/Header';
import Btn from '../../components/Btn';
const More = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../../icons/bg.jpg')}
      style={{flex: 1, alignContent: 'center'}}>
      {/* <Header title={'More'} /> */}
      <View style={{marginTop: '40%'}}>
        <Text style={styles.heading}>
          Please choose the Application you want to proceed
        </Text>
        <View style={styles.btnView}>
          <Btn title={'Chat App'} onPress={() => navigation.navigate('App1')} />
        </View>
        <View style={styles.btnView}>
          <Btn
            title={'Wonder App'}
            onPress={() => navigation.navigate('App2')}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default More;

const styles = StyleSheet.create({
  btnView: {
    marginTop: 20,
    marginLeft: 30,
  },
  heading: {
    fontSize: 30,
    color: 'white',
    margin: 10,
    textAlign: 'center',
  },
});
