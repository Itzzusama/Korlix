import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {useState, useEffect} from 'react';
import BoxCom from '../../components/BoxCom';
import Btn from '../../components/Btn';
import W_horizontalSlider from '../../components/W_horizontalSlider';

import {
  TourGuideProvider,
  TourGuideZone,
  TourGuideZoneByPosition,
  useTourGuideController,
} from 'rn-tourguide';

const W_Home = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('Text 1');
  const [isHighlighted, setIsHighlighted] = useState(false);
  const {canStart, start, stop, eventEmitter} = useTourGuideController();
  useEffect(() => {
    if (canStart) {
      start();
    }
  }, [canStart]);
  const handleOnStart = () => console.log('start');
  const handleOnStop = () => console.log('stop');
  const handleOnStepChange = () => console.log('stepChange');

  useEffect(() => {
    eventEmitter.on('start', handleOnStart);
    eventEmitter.on('stop', handleOnStop);
    eventEmitter.on('stepChange', handleOnStepChange);

    return () => {
      eventEmitter.off('start', handleOnStart);
      eventEmitter.off('stop', handleOnStop);
      eventEmitter.off('stepChange', handleOnStepChange);
    };
  }, []);

  const handleTabPress = tab => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Text 1':
        return (
          <ScrollView style={styles.tabContent}>
            <Image
              source={require('../../icons/I1.jpg')}
              style={styles.tabImage}
            />
            <Image
              source={require('../../icons/I1.jpg')}
              style={styles.tabImage}
            />
          </ScrollView>
        );
      case 'Text 2':
        return (
          <ScrollView style={styles.tabContent}>
            <Image
              source={require('../../icons/I2.jpg')}
              style={styles.tabImage}
            />
            <Image
              source={require('../../icons/I2.jpg')}
              style={styles.tabImage}
            />
          </ScrollView>
        );
      case 'Text 3':
        return (
          <ScrollView style={styles.tabContent}>
            <Image
              source={require('../../icons/I3.jpg')}
              style={styles.tabImage}
            />
            <Image
              source={require('../../icons/I3.jpg')}
              style={styles.tabImage}
            />
          </ScrollView>
        );
      default:
        return (
          <ScrollView style={styles.tabContent}>
            <Image
              source={require('../../icons/I1.jpg')}
              style={styles.tabImage}
            />
            <Image
              source={require('../../icons/I1.jpg')}
              style={styles.tabImage}
            />
          </ScrollView>
        );
    }
  };

  const handleHighlightPress = () => {
    setIsHighlighted(false);
  };
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flexDirection: 'row', margin: 20}}>
        <Image
          source={require('../../icons/wonder.png')}
          style={{height: 30, width: 80}}
        />
        <Image
          source={require('../../icons/AI_AVATAR.png')}
          style={{height: 30, width: 100, marginLeft: 40}}
        />
        <Image
          source={require('../../icons/PRO.png')}
          style={{height: 30, width: 80, marginLeft: 10}}
        />
        <Image
          source={require('../../icons/ID.png')}
          style={{height: 40, width: 40, marginLeft: 10}}
        />
      </View>
      <View style={{flexDirection: 'row', margin: 10}}>
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <Text style={{color: 'black', textDecorationLine: 'underline'}}>
            Add Your Photo
          </Text>
          <Image
            source={require('../../icons/bulb.png')}
            style={{height: 20, width: 20, marginLeft: 3}}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <Text
            style={{
              color: 'black',
              textDecorationLine: 'underline',
              alignContent: 'flex-end',
              marginLeft: '40%',
            }}>
            I need Inspiration
          </Text>
          <Image
            source={require('../../icons/gallery.png')}
            style={{height: 20, width: 20, marginLeft: 3}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.inputView}>
        <TextInput
          placeholder="Type here.."
          placeholderTextColor={'#141414'}
          style={styles.textInputView}
          multiline
        />
        <TouchableOpacity>
          <Image
            source={require('../../icons/cross.png')}
            style={{height: 8, width: 8, right: 40, marginTop: 108}}
          />
        </TouchableOpacity>
      </View>

      <TourGuideZone
        zone={2}
        text="Choose a Style"
        contentContainerStyle={{}}
        borderRadius={16}>
        <View>
          <Text style={[styles.boldText, {fontSize: 20}]}>Aspect Ratio:</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.simpleText}>Select</Text>
            <Text style={styles.boldText}>Style</Text>
          </View>
          <Text style={[styles.simpleText, {fontSize: 13}]}>Optional</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('W_Avatar')}
            style={{flexDirection: 'row', marginLeft: '25%', marginTop: 13}}>
            <Text style={[styles.simpleText, {fontSize: 10}]}>See all</Text>
            <Image
              source={require('../../icons/greater-than.png')}
              style={{height: 10, width: 10, margin: 2}}
            />
          </TouchableOpacity>
        </View>

        <BoxCom />
      </TourGuideZone>
      <Btn title={'Watch an AD'} BtnStyle={styles.BtnStyle} />
      <W_horizontalSlider />

      <View style={styles.dotsContainer}>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
      {/* body View */}
      <View style={styles.container}>
        <Image
          source={require('../../icons/grey.jpg')}
          style={styles.backgroundImage}
        />
        <View style={styles.rowView}>
          <View>
            <Text style={styles.text}>
              Discover
              <Text style={[styles.text, {fontWeight: 'bold'}]}>
                {`  Artworks`}
              </Text>
            </Text>
          </View>
          <TouchableOpacity>
            <Image
              source={require('../../icons/search.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContent}>
          <TouchableOpacity
            onPress={() => handleTabPress('Text 1')}
            activeOpacity={0.8}>
            <Text
              style={[
                styles.scrollText,
                activeTab === 'Text 1' && styles.boldTextN,
              ]}>
              Editor's Choice
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleTabPress('Text 2')}
            activeOpacity={0.8}>
            <Text
              style={[
                styles.scrollText,
                activeTab === 'Text 2' && styles.boldTextN,
              ]}>
              {' Top Artworks'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleTabPress('Text 3')}
            activeOpacity={0.8}>
            <Text
              style={[
                styles.scrollText,
                activeTab === 'Text 3' && styles.boldTextN,
              ]}>
              {' Recent Artworks'}
            </Text>
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.tabContainer}>{renderTabContent()}</View>
      </View>
    </ScrollView>
  );
};

export default W_Home;

const styles = StyleSheet.create({
  boldText: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black',
    marginLeft: 10,
  },
  simpleText: {
    fontSize: 30,
    color: 'black',
    marginLeft: 10,
  },
  BtnStyle: {
    backgroundColor: 'black',
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  wonderView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  text: {
    flex: 1,
    fontSize: 20,
    color: 'black',
  },
  inputView: {
    borderColor: 'pink',
    borderRadius: 20,
    width: '95%',
    margin: 10,
    flexDirection: 'row',
  },
  textInputView: {
    borderWidth: 1,
    borderColor: '#41D1D3',
    margin: 10,
    width: '95%',
    height: 120,
    borderRadius: 15,
    color: 'black',
    borderWidth: 5,
    paddingHorizontal: 15,
  },
  image: {
    width: 24,
    height: 24,
  },
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 30,
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 15,

    marginTop: 20,
    // maxWidth: '80%',
  },
  text: {
    fontSize: 26,
    marginLeft: 5,

    color: 'black',
  },
  icon: {
    width: 24,
    height: 24,
  },
  scrollView: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    marginHorizontal: 16,
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  scrollViewContent: {
    flexDirection: 'row',
    height: 30,
  },
  scrollText: {
    flex: 1,
    fontSize: 16,
    marginRight: 7,
    color: 'black',
  },
  imageView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  centerImage: {
    width: 350,
    margin: 10,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 15,
  },
  tabContainer: {
    flex: 1,
    marginTop: 20,
  },
  tabContent: {
    flex: 1,
    paddingHorizontal: 16,
  },

  tabImage: {
    width: 350,
    margin: 10,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 15,
  },
  boldTextN: {
    fontWeight: 'bold',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'black',
    marginHorizontal: 5,
  },
  highlightView: {
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlightText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
