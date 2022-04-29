import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import Ball from './Ball';
import Deck from './Deck';
import {Card, Button} from 'react-native-elements';
const DATA = [
  {
    id: 1,
    text: 'Card #1',
    uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
  },
  {
    id: 2,
    text: 'Card #2',
    uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
  },
  {
    id: 3,
    text: 'Card #3',
    uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
  },
  {
    id: 4,
    text: 'Card #4',
    uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
  },
  {
    id: 5,
    text: 'Card #5',
    uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
  },
  {
    id: 6,
    text: 'Card #6',
    uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg',
  },
  {
    id: 7,
    text: 'Card #7',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg',
  },
  {
    id: 8,
    text: 'Card #8',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg',
  },
];
class AminationView extends Component {
  renderCard = item => {
    return (
      <Card key={item.id} title={item.text} image={{uri: item.uri}}>
        <Text style={{marginBottom: 10}}>Card style</Text>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{uri: item.uri}}
        />
        {/* <Card.Image
          style={{padding: 0, height:200, width:200}}
          source={{
            uri: item.uri,
          }}
        /> */}
        <Button
          // icon={{name: 'code'}}
          backgroundColor="#03A9F4"
          title="View All"
        />
      </Card>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        {/* <Ball /> */}
        <Deck
          data={DATA}
          renderCard={this.renderCard}
          onSwipeRight={this.onSwipeRight}
          onSwipeLeft={this.onSwipeLeft}
        />
      </View>
    );
  }
}

export default AminationView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 200,
    // width: 200,
  },
});
