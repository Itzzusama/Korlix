import * as React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Splash from './assets/screens/Splash';
import Option from './assets/screens/Option';
//APP1 Screens:
import More from './assets/screens/More';
import Chat from './assets/screens/Chat';
import ChatScreen from './assets/screens/ChatScreen';
import Explore from './assets/screens/Explore';
import OnBoard from './assets/screens/OnBoard';
import Premium from './assets/screens/Premium';
//APP2 Screens:
import W_OnBoard from './assets/Screens2/W_Onboard';
import W_Home from './assets/Screens2/W_Home';
import W_Premium from './assets/Screens2/W_Premium';
import W_Avatar from './assets/Screens2/W_Avatar';
import Profile from './assets/Screens2/Profile';
import TourScreen from './assets/Screens2/TourScreen';

import {
  TourGuideProvider, // Main provider
  TourGuideZone, // Main wrapper of highlight component
  TourGuideZoneByPosition, // Component to use mask on overlay (ie, position absolute)
  useTourGuideController, // hook to start, etc.
} from 'rn-tourguide';
const Stack = createNativeStackNavigator();
// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} initialRouteName="Chat">
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={require('./assets/icons/Explore.png')}
                style={{height: 24, width: 24}}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={require('./assets/icons/Home.png')}
                style={{height: 24, width: 24}}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={require('./assets/icons/Setting.png')}
                style={{height: 24, width: 24}}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
function MyTabs2() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} initialRouteName="Chat">
      <Tab.Screen
        name="W_Home"
        component={W_Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={require('./assets/icons/Explore.png')}
                style={{height: 24, width: 24}}
              />
            );
          },
        }}
      />
      {/* <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={require('./assets/icons/Home.png')}
                style={{height: 24, width: 24}}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={require('./assets/icons/Setting.png')}
                style={{height: 24, width: 24}}
              />
            );
          },
        }}
      /> */}
    </Tab.Navigator>
  );
}

function App1() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* <Stack.Screen name="Splash" component={Splash} /> */}
      <Stack.Screen name="OnBoard" component={OnBoard} />
      <Stack.Screen name="Premium" component={Premium} />
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="More" component={More} />
    </Stack.Navigator>
  );
}
function App2() {
  const style = {
    // backgroundColor: 'red',
    // textColor:'red',
    // borderRadius: 10,
    // paddingTop: 5,
  };
  return (
    <TourGuideProvider
      {...{
        borderRadius: 16,
        androidStatusBarVisible: true,
       
        backdropColor: 'rgba(0, 0,0, 0.8)',
      }}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {/* <Stack.Screen name="Splash" component={Splash} /> */}
        <Stack.Screen name="W_OnBoard" component={W_OnBoard} />
        <Stack.Screen name="W_Premium" component={W_Premium} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="MyTabs2" component={MyTabs2} />
        <Stack.Screen name="W_Home" component={W_Home} />
        <Stack.Screen name="TourScreen" component={TourScreen} />
        <Stack.Screen name="W_Avatar" component={W_Avatar} />
        {/* <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="More" component={More} /> */}
      </Stack.Navigator>
    </TourGuideProvider>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={Splash} />

        <Stack.Screen name="Option" component={Option} />
        <Stack.Screen name="App1" component={App1} />
        <Stack.Screen name="App2" component={App2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
