import React, { useState } from 'react';
import { View, Button, Image, TouchableOpacity, Text } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';
import Btn from '../../components/Btn';


const W_Avatar = () => {
  const [image, setImage] = useState(null);
  let ImageOptions = {
    width: 300,
    height: 300,
    quality: 0.2,
    mediaType: 'photo',
    // includeBase64: true,
  }
  const pickImage = async () => {
    launchImageLibrary(ImageOptions, imageCallBack)
  };
  const imageCallBack = async response => {
    console.log("response,,,", response)
    if (response.didCancel) {
      console.log('Picker Canceled')
    } else if (response.error) {
      console.log('image picker error', response.error)
    } else {
      console.log(response)
      const uploadImageSource = {
        name: response.assets[0].fileName,
        uri: response.assets[0].uri,
        type: response.assets[0].type,
      }
      console.log(uploadImageSource)
      setImage(response.assets[0].uri)
    }
  }

  // For camera launch
  const launchCam = async () => {
    launchCamera(ImageOptions, cameraCallBack)
  };
  const cameraCallBack = async response => {
    console.log("response,,,", response)
    if (response.didCancel) {
      console.log('Picker Canceled')
    } else if (response.error) {
      console.log('image picker error', response.error)
    } else {
      console.log(response)
      const uploadImageSource = {
        name: response.assets[0].fileName,
        uri: response.assets[0].uri,
        type: response.assets[0].type,
      }
      console.log(uploadImageSource)
      setImage(response.assets[0].uri)
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{color:'black',marginBottom:20, fontSize:25}}>
            Choose image to create avatar
        </Text>
      <Button title="Pick Image" onPress={pickImage} />
      <View style={{ width: '80%', height: "50%", justifyContent: "center", paddingLeft: 55, paddingTop: 40 }}>
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      </View>
      <Button title="Open Camera" onPress={launchCam} />
      <TouchableOpacity onPress={this.cameraLaunch}>
        {/* <Text >Launch Camera Directly</Text> */}
        {/* <View style={{ width: '80%', height: "50%", justifyContent: "center", paddingLeft: 55, paddingTop: 40 }}>
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        </View> */}
        {/* <Btn title={"Create Avatar"/> */}
      </TouchableOpacity>
    </View>
  );
};

export default W_Avatar;
