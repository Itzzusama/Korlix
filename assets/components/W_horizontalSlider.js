import React from 'react';
import {View, ScrollView, Image, Dimensions, StyleSheet, TouchableOpacity} from 'react-native';

const W_horizontalSlider = () => {
  const images = [
    {id: 1, source: require('../icons/sliderImage.png')},
    {id: 2, source: require('../icons/sliderImage.png')},
    {id: 3, source: require('../icons/sliderImage.png')},
  ];

  return (
    <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
      <TouchableOpacity style={styles.arrowContainer}>
        <Image
          source={require('../icons/forwardArrow.png')}
          style={styles.arrowImage}
        />
      </TouchableOpacity>
      {images.map(image => (
        <View key={image.id} style={styles.slide}>
          <Image source={image.source} style={styles.image} />
        </View>
      ))}
      <TouchableOpacity style={styles.arrowContainer}>
        <Image
          source={require('../icons/backwardArrow.png')}
          style={styles.arrowImage}
        />
      </TouchableOpacity>
      {images.map(image => (
        <View key={image.id} style={styles.slide}>
          <Image source={image.source} style={styles.image} />
        </View>
      ))}
    </ScrollView>
  );
};
export default W_horizontalSlider;

const styles = StyleSheet.create({
  slide: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  image: {
    width: Dimensions.get('window').width,
    height: 200,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  arrowContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    bottom: 0,
    width: 50,
  },
  arrowImage: {
    width: 24,
    height: 24,
  },
});
