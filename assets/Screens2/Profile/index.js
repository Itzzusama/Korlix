import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Profile = ({navigation}) => {
  const handleSignUpWithGoogle = () => {
    // Handle sign up with Google logic
  };

  const handleSignUpWithFacebook = () => {
    // Handle sign up with Facebook logic
  };

  const handleSignUpWithEmail = () => {
    // Handle sign up with email logic
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('W_Home')}>
          <Image
            source={require('../../icons/back.png')}
            style={styles.headerImage}
          />
        </TouchableOpacity>

        <Text style={styles.profileText}>Profile</Text>
        <Image
          source={require('../../icons/Setting.png')}
          style={styles.headerImage}
        />
      </View>
      <View style={styles.body}>
        <Image
          source={require('../../icons/logo.png')}
          style={styles.bodyImage}
        />
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text1}>{'Welcome to '}</Text>
          <Text style={styles.text2}>{'Wonder '}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleSignUpWithEmail}
            style={styles.button}>
            <Text style={styles.buttonText}>Sign Up with Email</Text>
          </TouchableOpacity>
          <Text style={styles.bar}>{'________or continue with________'}</Text>
          <TouchableOpacity
            onPress={handleSignUpWithGoogle}
            style={styles.button}>
            <Text style={styles.buttonText}>Sign Up with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleSignUpWithFacebook}
            style={styles.button}>
            <Text style={styles.buttonText}>Sign Up with Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.loginContainer}>
        <View style={styles.loginRow}>
          <Text style={styles.text}>Already have an account?</Text>
          <TouchableOpacity //</View>onPress={handleLogin}
            style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  profileText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  headerImage: {
    width: 24,
    height: 24,
  },
  body: {
    flex: 0.9,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bodyImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: '#eaeaea',
    paddingVertical: 20,
    paddingHorizontal: 70,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
  },
  loginContainer: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginRight: 5,
    color: 'black',
  },
  text1: {
    color: 'black',
    alignSelf: 'center',
    fontSize: 24,
    marginBottom: 20,
  },
  text2: {
    color: 'black',
    alignSelf: 'center',
    fontSize: 25,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  bar: {
    color: 'black',
    margin: 15,
    alignSelf: 'center',
  },
  loginButton: {
    backgroundColor: 'white',
    paddingVertical: 5,
    borderRadius: 5,
  },
  loginButtonText: {
    color: 'black',
    fontSize: 16,
  },
});
