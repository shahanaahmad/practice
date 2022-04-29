import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const Realm = require('realm');

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    // this.state = {realm: null};
  }

  componentDidMount() {
    // Realm.open({
    //   schema: [{name: 'Dog', properties: {name: 'string'}}],
    // }).then(realm => {
    //   realm.write(() => {
    //     realm.create('Dog', {name: 'Rex'});
    //   });
    //   this.setState({realm});
    // });
  }

  // componentWillUnmount() {
  //   // Close the realm if there is one open.
  //   const {realm} = this.state;
  //   if (realm !== null && !realm.isClosed) {
  //     realm.close();
  //   }
  // }

  renderButtons = title => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.handlePress(title);
        }}
        style={styles.btnView}>
        <Text style={styles.btnText}>{title}</Text>
      </TouchableOpacity>
    );
  };

  handlePress = title => {
    if (title === 'Register User') {
      this.props.navigation.navigate('Register');
    } else if (title === 'View All') {
      this.props.navigation.navigate('View');
    } else if (title === 'Animation') {
      this.props.navigation.navigate('AnimationView');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderButtons('Register User')}
        {this.renderButtons('View All')}
        {this.renderButtons('Animation')}
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  btnView: {
    width: Dimensions.get('window').width * 0.95,
    padding: 10,
    marginTop: 15,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
