import {StyleSheet, Text, View, Image,} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';

const W_OnBoard = ({navigation}) => {
  const onboardingScreens = [
    {
      title: 'Welcome to',
      subtitle: 'Wonder',
      titleStyles: {bottom: 100},
      subTitleStyles: {bottom: 120},
      image: (
        <Image
          source={require('../../icons/S1.png')}
          style={{height: '90%', width: '90%'}}
        />
      ),
    },
    {
      title: 'Turn your words into',
      subtitle: 'artwork',
      titleStyles: {color: 'black',bottom: 100,right:20},
      subTitleStyles: {color: 'black',bottom:170,right:20},
      image: (
        <Image
          source={require('../../icons/S2.png')}
          style={{height: '95%', width: '100%',marginTop:10,}}
        />
      ),
    },
    {
      title: 'Create your own',

      subtitle: 'AI AVatar',
      titleStyles: {color: 'black',bottom: 120,right:25},
      subTitleStyles: {color: 'black',bottom:140,right:85},
      image: (
        <Image
          source={require('../../icons/S3.png')}
          style={{height: '95%', width: '98%'}}
        />
      ),
    },
    {
      title: 'Turn yourselft into',

      subtitle: 'Anime Character',
      titleStyles: {color: 'black',bottom: 120,right:15},
      subTitleStyles: {color: 'black',bottom:140,right:25},
      image: (
        <Image
          source={require('../../icons/S4.png')}
          style={{height: '95%', width: '100%'}}
        />
      ),
    },
  ];

  return (
    <View style={{flex: 1}}>
      <Onboarding
        //  containerStyles={{}}
        pages={onboardingScreens}
        containerStyles={{height: '70%', width: 70, backgroundColor:'white'}}
        showSkip={true}
        onSkip={() => navigation.replace('W_Premium')}
        onDone={() => navigation.replace('W_Premium')}
        titleStyles={{
          fontSize: 42,
          textAlign: 'left',
          color: 'black',
          right: 50,
        }}
        subTitleStyles={{
          fontSize: 42,
          color: 'black',
          fontWeight:'bold',
          textAlign: 'left',
          right: 85,
        }}
      />
    </View>
  );
};

export default W_OnBoard;

const styles = StyleSheet.create({});
