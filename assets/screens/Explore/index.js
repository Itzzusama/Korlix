import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import Chat from '../Chat';
import More from '../More';
import Header from '../../components/Header';
import Btn from '../../components/Btn';
import BoxCom from '../../components/BoxCom';

const Explore = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <Header viewStyle={styles.headerStyle} title={'Explore'} />
      <ScrollView>
        <View>
          <Text style={styles.headingStyle}>Categories</Text>
        </View>
        <View style={styles.subHeadingView}>
          <Image
            source={require('../../icons/briefcase.png')}
            style={styles.subHeadingImg}
          />
          <Text style={styles.subHeadingText}>Travels & Explore</Text>
        </View>
        <BoxCom />
        <View style={styles.subHeadingView}>
          <Image
            source={require('../../icons/bulb.png')}
            style={styles.subHeadingImg}
          />
          <Text style={styles.subHeadingText}>Creative Ideas</Text>
        </View>
        <BoxCom />
        <View style={styles.subHeadingView}>
          <Image
            source={require('../../icons/Microscope.png')}
            style={styles.subHeadingImg}
          />
          <Text style={styles.subHeadingText}>Science & Learning</Text>
        </View>

        <BoxCom />

        <View style={styles.subHeadingView}>
          <Image
            source={require('../../icons/sun.png')}
            style={styles.subHeadingImg}
          />
          <Text style={styles.subHeadingText}>Beauty & Lifestyle</Text>
        </View>
        <BoxCom />
      </ScrollView>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerStyle: {
    alignItems: 'flex-start',
    backgroundColor: 'white',
    margin: 10,
  },
  headingStyle: {
    fontSize: 20,
    color: 'black',
    margin: 15,
    fontWeight: 'bold',
  },
  subHeadingView: {
    flexDirection: 'row',
    margin: 15,
  },
  subHeadingText: {
    color: 'black',
    marginLeft: 5,
    fontWeight: 'bold',
  },
  subHeadingImg: {
    height: 20,
    width: 20,
  },
});
