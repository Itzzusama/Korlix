import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const DATA = [
  {id: '1', title: 'Item 1'},
  {id: '2', title: 'Item 2'},
  {id: '3', title: 'Item 3'},
  {id: '4', title: 'Item 4'},
  {id: '5', title: 'Item 5'},
];

const BoxCom = () => {
  const renderItem = ({item}) => {
    const colors = [
      '#2196F3',
      '#4CAF50',
      '#FFC107',
      '#9C27B0',
      '#E91E63',
      '#917a39',
    ];
    const random = Math.floor(Math.random() * colors.length);
    const backgroundColor = colors[random];

    return (
      <View style={[styles.boxItem, {backgroundColor}]}>
        <Text style={styles.boxItemText}>{item.title}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={DATA}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.listContentContainer}
    />
  );
};

const styles = StyleSheet.create({
  boxItem: {
    width: 140,
    height: 100,
    borderRadius: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxItemText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  listContentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
});

export default BoxCom;
