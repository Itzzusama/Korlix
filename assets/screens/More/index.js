import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Image,
  Pressable,
  Modal,
} from 'react-native';
import React from 'react';
import Chat from '../Chat';
import Header from '../../components/Header';
import Btn from '../../components/Btn';
import {useState} from 'react';
const More = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View>
      {/* Rate US Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Image
                style={styles.crossIcon}
                source={require('../../icons/cross.png')}
              />
            </TouchableOpacity>
            <Image
              style={{height: '70%', width: '110%'}}
              source={require('../../icons/rate-star.png')}
            />
            <Text style={styles.modalTextHeading}>
              {'Do you like us as much as we like you'}
            </Text>
            <Text style={styles.modalText}>
              {
                "We'd love to get a detailed review from you on the play store, telling the world why you enjoyed Korlix"
              }
            </Text>
            <Btn
              title={'Help Korlix'}
              onPress={() => setModalVisible(!modalVisible)}
            />
          </View>
        </View>
      </Modal>

      {/* second Modal of purchase */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setIsModalVisible(!isModalVisible);
        }}>
        <View style={styles.bottomView}>
          <View style={styles.purchaseModalView}>
            <TouchableOpacity
              onPress={() => {
                setIsModalVisible(!isModalVisible);
              }}>
              <Image
                style={styles.crossIcon}
                source={require('../../icons/cross.png')}
              />
            </TouchableOpacity>
            <Image
              style={{height: '50%', width: '55%'}}
              source={require('../../icons/purchaseimg.png')}
            />
            <Text style={styles.modalText}>
              {
                "Nova's Al consumes a tremendous amount of computational power, which is why Nova operates on a credit system for messages. Each request sent to Nova deducts one credit from your balance. You will receive 3 daily credits by default, or you can upgrade to the Pro plan for unlimited messages."
              }
            </Text>
            <Btn
              title={'Upgrade'}
              onPress={() => setIsModalVisible(!isModalVisible)}
            />
          </View>
        </View>
      </Modal>

      <ScrollView>
        <View style={{margin: 30}}>
          <Image
            source={require('../../icons/user.png')}
            style={styles.profileImg}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.heading}>{'Invite friends '}</Text>
        </View>
        <View>
          <Btn title={'Earn Free Pro'} BtnStyle={styles.BtnStyle} />
        </View>
        <Text style={styles.heading}>{'App Language '}</Text>
        <Text style={styles.description}>
          {
            'You can change your default App interface language at any time. Korlix can understand your queries and answer them in any language, regardless of the language of the app interface'
          }
        </Text>
        <Text style={styles.heading}>{'Settings '}</Text>
        <TouchableOpacity
          style={{
            width: '90%',
            height: 70,
            backgroundColor: '#CECECE',
            alignSelf: 'center',
            borderRadius: 16,
          }}>
          <View style={{flexDirection: 'row', margin: 23}}>
            <Image
              style={styles.iconImg}
              source={require('../../icons/speaker.png')}></Image>
            <Text style={styles.text}>Voice</Text>
            <Image
              style={{height: 18, width: 18, marginLeft: 225}}
              source={require('../../icons/greater-than.png')}></Image>
          </View>
        </TouchableOpacity>

        {/* First Container */}

        <View style={styles.buttonView}>
          <TouchableOpacity
            style={{
              marginTop: 10,
              height: 70,
            }}>
            <View style={styles.horizontalView}>
              <Image
                style={styles.iconImg}
                source={require('../../icons/question-mark.png')}></Image>
              <Text style={styles.text}>Help</Text>
              <Image
                style={{height: 18, width: 18, marginLeft: 230}}
                source={require('../../icons/greater-than.png')}></Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optView}>
            <TouchableOpacity
              onPress={() => setIsModalVisible(true)}
              style={styles.horizontalView}>
              <Image
                style={styles.iconImg}
                source={require('../../icons/crown.png')}></Image>
              <Text style={styles.text}>Restore Purchases</Text>
              <Image
                style={{height: 18, width: 18, marginLeft: 140}}
                source={require('../../icons/greater-than.png')}></Image>
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optView}>
            <View style={styles.horizontalView}>
              <Image
                style={styles.iconImg}
                source={require('../../icons/ID.png')}></Image>
              <Text style={styles.text}>User ID</Text>
              <Image
                style={{height: 18, width: 18, marginLeft: 210}}
                source={require('../../icons/greater-than.png')}></Image>
            </View>
          </TouchableOpacity>
        </View>

        {/* Second Container */}

        <View style={styles.buttonView}>
          <TouchableOpacity
            style={{
              marginTop: 10,
              height: 70,
            }}
            onPress={() => setModalVisible(true)}>
            <View style={styles.horizontalView}>
              <Image
                style={styles.iconImg}
                source={require('../../icons/rate.png')}></Image>
              <Text style={styles.text}>Rate Us</Text>
              <Image
                style={{height: 18, width: 18, marginLeft: 210}}
                source={require('../../icons/greater-than.png')}></Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optView}>
            <View style={styles.horizontalView}>
              <Image
                style={styles.iconImg}
                source={require('../../icons/doc.png')}></Image>
              <Text style={styles.text}>Terms of Use</Text>
              <Image
                style={{height: 18, width: 18, marginLeft: 175}}
                source={require('../../icons/greater-than.png')}></Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optView}>
            <View style={styles.horizontalView}>
              <Image
                style={styles.iconImg}
                source={require('../../icons/privacy-policy.png')}></Image>
              <Text style={styles.text}>Privacy Policy</Text>
              <Image
                style={{height: 18, width: 18, marginLeft: 170}}
                source={require('../../icons/greater-than.png')}></Image>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default More;

const styles = StyleSheet.create({
  BtnStyle: {
    alignSelf: 'center',
    backgroundColor: '#00E3E6',
  },
  profileImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
  },
  heading: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
    margin: 10,
  },
  description: {
    color: 'black',
    fontSize: 17,
    margin: 8,
    letterSpacing: 1,
    padding: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6ECEC',
    // marginTop: 22,
  },
  buttonView: {
    width: '90%',
    marginTop: 20,
    backgroundColor: '#D9D7D7',
    alignSelf: 'center',
    borderRadius: 16,
  },
  optView: {
    height: 70,
  },
  iconImg: {
    height: 20,
    width: 20,
  },
  text: {
    color: 'black',
    marginLeft: 8,
  },
  bottomView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#E6ECEC',
    opacity: 0.9,
  },
  modalView: {
    bottom: 15,
    height: '87%',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  purchaseModalView: {
    // bottom: 15,

    height: '60%',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'flex-end',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  crossIcon: {
    height: 14,
    width: 14,
    marginBottom: 15,
    right: 170,
  },
  horizontalView: {
    flexDirection: 'row',
    margin: 23,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalTextHeading: {
    marginBottom: 5,
    fontSize: 25,
    color: 'black',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  modalText: {
    marginBottom: 10,
    width: '92%',
    fontSize: 13,
    color: 'black',
    // textAlign: 'center',
    fontWeight: 'bold',
  },
});
