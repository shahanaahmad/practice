import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  FlatList,
  SafeAreaView,
} from 'react-native';
import Realm from 'realm';

import {USER_SCHEMA, UserDetail} from '../database/UserDetailSchema';

class ViewUser extends Component {
  constructor() {
    super();
    this.userDetail = [];
  }

  async componentDidMount() {
    let databaseOptions = {
      schema: [UserDetail],
    };
    let realmObj = await this.openDataBase(databaseOptions);
    var dataFromDB = await this.getAllDataFromDB(realmObj, USER_SCHEMA);
    dataFromDB = this.realmToArray(dataFromDB);
    this.userDetail = dataFromDB;
    this.setState({});
    await this.closeDataBase(realmObj);
    // console.log(this.state.userDetail);
  }

  closeDataBase = async realmObj => {
    try {
      await realmObj.close();
    } catch (error) {
      console.log(error);
    }
  };

  realmToArray = realmArray => {
    if (realmArray?.length > 0) {
      let string = JSON.stringify(realmArray);
      let array = string !== '' ? JSON.parse(string) : [];
      return Object.values(array);
    }
  };

  getAllDataFromDB = async (realmObj, schemaName) => {
    try {
      let dataFromDB = await realmObj.objects(schemaName);
      return dataFromDB;
    } catch (error) {
      console.log(error);
    }
  };

  openDataBase = async databaseOptions => {
    try {
      return Realm.open(databaseOptions).then(realmObj => {
        return realmObj;
      });
    } catch (error) {
      console.log(error);
    }
  };

  renderList = ({item}) => {
    return (
      <View style={styles.listView}>
        <Text>{item.name}</Text>
        <Text>{item.address}</Text>
      </View>
    );
  };

  renderUserList = () => {
    return (
      <View>
        <FlatList data={this.userDetail} renderItem={this.renderList} />
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcome}>View User</Text>
        <View style={styles.container}>
          <View>{this.renderUserList()}</View>
        </View>
      </SafeAreaView>
    );
  }
}

export default ViewUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  listView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 10,
    padding: 10,
  },
});
