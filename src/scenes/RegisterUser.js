import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import CustomTextInput from '../utility/components/CustomTextInput';
import Realm from 'realm';
class RegisterUser extends Component {
  state = {
    userName: '',
    address: '',
    realm: null,
  };

  componentWillUnmount() {
    // Close the realm if there is one open.
    const {realm} = this.state;
    if (realm !== null && !realm.isClosed) {
      realm.close();
    }
  }

  renderbutton = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.onPressSubmit();
        }}
        style={styles.btnView}>
        <Text style={styles.btnText}>Submit</Text>
      </TouchableOpacity>
    );
  };

  onPressSubmit = () => {
    if (this.state.userName && this.state.address) {
      Realm.open({
        schema: [
          {name: 'UserDetail', properties: {name: 'string', address: 'string'}},
        ],
      }).then(realm => {
        realm.write(() => {
          realm.create('UserDetail', {
            name: this.state.userName,
            address: this.state.address,
          });
        });
        this.setState({realm});
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.welcome}>Register User</Text>
        </View>

        <View>
          <Text>Name:</Text>
          <CustomTextInput
            onChangeText={text =>
              this.setState({
                userName: text,
              })
            }
          />
        </View>

        <View>
          <Text>Location:</Text>
          <CustomTextInput
            onChangeText={text =>
              this.setState({
                address: text,
              })
            }
          />
        </View>
        {this.renderbutton()}
      </View>
    );
  }
}

export default RegisterUser;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    // margin:10,
    padding: 10,
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 25,
    margin: 10,
    padding: 10,
  },
  inputViewStyle: {
    width: Dimensions.get('window').width * 0.95,
    height: 45,
    marginTop: 10,
    // padding: 10,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  inputStyle: {
    width: Dimensions.get('window').width * 0.95,
    height: 45,
    // margin: 12,
    // borderBoWidth: 1,
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
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
    borderRadius: 5,
  },
});
