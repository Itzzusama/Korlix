import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
// import { Image } from 'react-native'

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Option');
    }, 1000);
  });

  return (
    <View>
      <Image
        source={require('../../icons/bg.jpg')}
        style={styles.bgImg}></Image>
      <View style={styles.img}>
        <Image source={require('../../icons/NOVA.png')}></Image>
        {/* <Text style={{ backgroundColor: 'red', fontSize: 50 }}> Welcome </Text> */}
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  bgImg: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    border: 2,
    borderColor: 'black',
    borderRadius: 3,
  },
});
