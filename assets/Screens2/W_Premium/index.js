import React from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Btn from '../../components/Btn';

import W_horizontalSlider from '../../components/W_horizontalSlider';
const W_Premium = ({navigation, onOptionSelect}) => {
  const handleOptionSelect = option => {
    onOptionSelect(option);
  };
  const closeScreen = () => {
    navigation.navigate('Profile'); // or any navigation method you are using
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={closeScreen} style={styles.closeButton}>
        <Image
          source={require('../../icons/cross.png')}
          style={{height: 25, width: 15, tintColor: 'white'}}
        />
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        <Image source={require('../../icons/bg.jpg')} style={styles.image} />
      </View>
      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <Text style={styles.text1}>Wonder</Text>
        <Text style={styles.text2}>PRO</Text>
      </View>
      <View style={styles.featuresContainer}>
        <View style={styles.featureRow}>
          <View style={styles.featureItem}>
            <Image
              source={require('../../icons/tick.png')}
              style={styles.featureImage}
            />
            <Text style={styles.featureText}>Remve Ads</Text>
          </View>
        </View>
        <View style={styles.featureRow}>
          <View style={styles.featureItem}>
            <Image
              source={require('../../icons/tick.png')}
              style={styles.featureImage}
            />
            <Text style={styles.featureText}>Unlimited ART Creation</Text>
          </View>
        </View>
        <View style={styles.featureRow}>
          <View style={styles.featureItem}>
            <Image
              source={require('../../icons/tick.png')}
              style={styles.featureImage}
            />
            <Text style={styles.featureText}>Download High Res ArtWork</Text>
          </View>
        </View>
        <View style={styles.featureRow}>
          <View style={styles.featureItem}>
            <Image
              source={require('../../icons/tick.png')}
              style={styles.featureImage}
            />
            <Text style={styles.featureText}>50% off on AI Avatars</Text>
          </View>
        </View>
      </View>

      <View style={styles.optionsContainer}>
        <TouchableOpacity
          onPress={() => handleOptionSelect('Option 1')}
          style={styles.optionButton}>
          <Text style={styles.optionText}>Option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleOptionSelect('Option 2')}
          style={styles.optionButton}>
          <Text style={styles.optionText}>Option 2</Text>
        </TouchableOpacity>
      </View>
      <Btn title={'Try For Free'} BtnStyle={styles.BtnStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  BtnStyle: {
    marginTop: 20,
    alignSelf: 'center',
    marginBottom: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  closeIcon: {
    width: 24,
    height: 24,
  },
  imageContainer: {
    flex: 0.7,
    backgroundColor: 'red',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '80%',
    resizeMode: 'cover',
  },
  text1: {
    fontSize: 30,
    color: 'black',
    marginTop: 10,
  },
  text2: {
    marginLeft: 10,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },
  featuresContainer: {
    flex: 1.2,
    padding: 20,
    marginBottom: 60,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  featureImage: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  featureText: {
    margin: 10,
    fontSize: 20,
    marginBottom: 10,
    color: 'black',
    // alignSelf: 'center',
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: 20,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    width: '95%',
  },
  optionsContainer: {
    marginBottom: 10,
  },
  optionButton: {
    backgroundColor: '#eaeaea',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    color: 'black',
  },
});

export default W_Premium;
