import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';

const OnBoard = ({navigation}) => {
  const onboardingScreens = [
    {
      title: 'Personal AI Assistant',
      subtitle:
        'Chat with the world most advanced AI on your mobile phone and receive instant answers ',

      image: (
        <Image
          source={require('../../icons/C1.png')}
          style={{height: '80%', width: '100%'}}
        />
      ),
    },
    // {
    //   title: 'Feature 1',
    //   subtitle: 'This is a description of feature 1',
    //   titleStyles: {color: 'black'},
    //   subTitleStyles: {color: 'black'},
    //   image: (
    //     <Image
    //       source={require('../../icons/Setting.png')}
    //       style={{height: '50%', width: '40%'}}
    //     />
    //   ),
    // },
    // {
    //   title: 'Feature 2',

    //   subtitle: 'This is a description of feature 2',
    //   titleStyles: {color: 'black'},
    //   subTitleStyles: {color: 'black'},
    //   image: (
    //     <Image
    //       source={require('../../icons/Explore.png')}
    //       style={{height: '50%', width: '40%'}}
    //     />
    //   ),
    // },
  ];

  return (
    <View style={{flex: 1}}>
      <Onboarding
        //  containerStyles={{}}
        pages={onboardingScreens}
        containerStyles={{height: 70, width: 70}}
        showSkip={true}
        onSkip={() => navigation.replace('Premium')}
        onDone={() => navigation.replace('Premium')}
        titleStyles={{
          fontSize: 32,
          color: 'black',
          bottom: 140,
          fontWeight: 'bold',
        }}
        subTitleStyles={{fontSize: 18, color: 'black', bottom: 140,width:340}}
      />
    </View>
  );
};

export default OnBoard;

const styles = StyleSheet.create({});
