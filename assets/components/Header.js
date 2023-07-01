import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = props => {
  const {viewStyle, title} = props;
  return (
    <View style={[styles.HeaderStyle, viewStyle]}>
      <Text style={{fontSize: 30, color: 'black', fontWeight: 'bold'}}>
        {title}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  HeaderStyle: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CDCDCD',
  },
});
