import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppNavigator from './src/routes/Route';

class App extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    );
  }
}

export default App;
