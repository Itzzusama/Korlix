import {
  Button,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import More from '../More';
import Header from '../../components/Header';
import Btn from '../../components/Btn';
const Chat = ({navigation}) => {
  const handleTextInputPress = () => {
    navigation.navigate('ChatScreen');
  };
  return (
    // <View>

    <ImageBackground
      source={require('../../icons/bg.jpg')}
      style={{flex: 1, alignContent: 'center'}}>
      {/* <Header title={'Home'} /> in case if header required */}
      <View>
        <View style={styles.logoStyle}>
          <Image
            style={{height: '130%', width: '100%'}}
            source={require('../../icons/NOVA.png')}
          />
        </View>
        <Text style={styles.headingTextStyle}>
          Type below to get answers {'\n'} Ask any open ended questions
        </Text>
        <TouchableOpacity
          onPress={handleTextInputPress}
          style={styles.inputStyle}>
          <Text style={styles.inputText}>Press Here...</Text>
          <TouchableOpacity>
            <Image
              source={require('../../icons/camera.png')}
              style={styles.cameraImg}
            />
          </TouchableOpacity>
        </TouchableOpacity>
        <View style={styles.btnStyle}>
          <Btn
            title={'Explore'}
            onPress={() => navigation.navigate('Explore')}
          />
        </View>
      </View>
    </ImageBackground>
    // </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  btnStyle: {
    marginTop: 150,
    marginLeft: 30,
  },
  cameraImg: {
    width: 28,
    height: 28,
    marginRight: 20,
  },
  inputText: {
    color: 'black',
    marginLeft: 15,
  },
  inputStyle: {
    flexDirection: 'row',
    backgroundColor: '#DDDADA',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    marginLeft: 20,
    width: '90%',
    borderRadius: 30,
  },
  headingTextStyle: {
    fontSize: 20,
    color: 'white',
    margin: 10,
    textAlign: 'center',
  },
  logoStyle: {
    height: '45%',
    width: '50%',
    alignSelf: 'center',
  },
});
