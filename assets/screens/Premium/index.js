import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Image} from 'react-native';
import Btn from '../../components/Btn';

const Premium = ({navigation}) => {
  const closeScreen = () => {
    navigation.navigate('MyTabs'); // or any navigation method you are using
  };
  const handleOptionSelect = option => {
    // Handle option selection logic here
  };

  return (
    <View style={styles.container}>
      {/* Add your screen content here */}

      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={closeScreen}>
            <Image
              source={require('../../icons/cross.png')}
              style={{height: 25, width: 15}}
            />
          </TouchableOpacity>
          <Image
            source={require('../../icons/logoPro.png')}
            style={styles.image}
          />
        </View>
        <Text style={styles.featureHeading}>{'Unlock Unlimited Access'}</Text>
        <View style={styles.featuresContainer}>
          <View style={styles.featureRow}>
          <View style={styles.featureItem}>
            <Image
              source={require('../../icons/GPT4.png')}
              style={styles.featureImage}
            />
            <Text style={styles.featureText}>Powered by GPT4</Text>
            </View>

          </View>
          <View style={styles.featureRow}>
          <View style={styles.featureItem}>
            <Image
              source={require('../../icons/Home.png')}
              style={styles.featureImage}
            />
            <Text style={styles.featureText}>Higher Word Limit</Text>

            </View>
          </View>
          <View style={styles.featureRow}>
          <View style={styles.featureItem}>
            <Image
              source={require('../../icons/crown.png')}
              style={styles.featureImage}
            />
            <Text style={styles.featureText}>No Limits</Text>
            </View>

          </View>
          <View style={styles.featureRow}>
          <View style={styles.featureItem}>
            <Image
              source={require('../../icons/infinity.png')}
              style={styles.featureImage}
            />
            <Text style={styles.featureText}>No Ads</Text>
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
    </View>
  );
};
export default Premium;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginRight: 90,
  },
  image: {
    width: 130,
    height: 35,
  },
  featuresContainer: {
    marginBottom: 20,
  },
  featureImage: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  featureHeading: {
    fontSize: 27,
    marginBottom:5,
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width:'95%'
  },
  BtnStyle: {
    marginTop: 20,
    alignSelf: 'center',
  },
  featureText: {
    margin: 10,
    fontSize: 26,
    marginBottom: 10,
    color: 'black',
    // alignSelf: 'center',
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  optionsContainer: {
    // flexDirection: 'row',
    height: '20%',
    margin: 2,
    justifyContent: 'space-between',
  },
  optionButton: {
    backgroundColor: '#eaeaea',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 3,
  },
  optionText: {
    fontSize: 16,
  },
});
