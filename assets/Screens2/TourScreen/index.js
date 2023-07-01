import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {
  TourGuideProvider,
  TourGuideZone,
  TourGuideZoneByPosition,
  useTourGuideController,
} from 'rn-tourguide';
const TourScreen = () => {
  const iconTextStyle = {fontSize: 40, color: '#888'};
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

  return (
    <View style={styles.container}>
      <TourGuideZone
        zone={2}
        text="A react-native-copilot remastered!"
        borderRadius={16}>
        <Text style={styles.title}>
          Welcome to the demo of {'\n'}"rn-tourguide"
        </Text>
      </TourGuideZone>
      <View style={styles.middleView}>
        <TouchableOpacity style={styles.button} onPress={() => start()}>
          <Text style={styles.buttonText}>START THE TUTORIAL!</Text>
        </TouchableOpacity>

        <TourGuideZone zone={3} shape="rectangle_and_keep">
          <TouchableOpacity style={styles.button} onPress={() => start(4)}>
            <Text style={styles.buttonText}>Step 4</Text>
          </TouchableOpacity>
        </TourGuideZone>
        <TouchableOpacity style={styles.button} onPress={() => start(2)}>
          <Text style={styles.buttonText}>Step 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={stop}>
          <Text style={styles.buttonText}>Stop</Text>
        </TouchableOpacity>
        <TourGuideZone
          zone={1}
          shape="circle"
          text="With animated SVG morphing with awesome flubber ">
          <Image
            source={require('../../icons/bg.jpg')}
            style={styles.profilePhoto}
          />
        </TourGuideZone>
      </View>
      <View style={styles.row}>
        <TourGuideZone zone={4} shape="circle">
          <Text style={styles.iconText}>{'Text 1'}</Text>
        </TourGuideZone>
        <Text style={styles.iconText}>{'Text 2'}</Text>
        <Text style={styles.iconText}>{'Text 3'}</Text>
        <TourGuideZone zone={5}>
          <Text style={styles.iconText}>{'Text 4'}</Text>
        </TourGuideZone>
        <TourGuideZone zone={6} shape="circle">
          <Text style={styles.iconText}>{'Text 5'}</Text>
        </TourGuideZone>
        <TourGuideZoneByPosition
          zone={7}
          shape="circle"
          isTourGuide
          bottom={30}
          left={35}
          width={300}
          height={300}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'black',
    marginBottom: 20,
  },
  middleView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    color:'black'
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 40,
    // color: '#888',
    marginHorizontal: 10,
    color:'black'
  },
});
export default TourScreen;
