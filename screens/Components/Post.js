import React from 'react';
import { Text, View, Image, StyleSheet} from 'react-native';

export default class Post extends React.Component {
  render() {
    text = this.props.text;
    return (
      <View style={styleThis.card}>
        <Text style={styleThis.text}>{text}</Text>
      </View>
    );
  }
}

const styleThis = StyleSheet.create({
  card: {
    width: '45%',
    aspectRatio: 0.60,
    padding: 5,
    margin: '2%',
    backgroundColor: '#000000',
    borderRadius: '10%',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FB00FF'
  },
});
