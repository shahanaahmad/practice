import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../scenes/HomeScreen';
import RegisterUser from '../scenes/RegisterUser';
import ViewUser from '../scenes/ViewUser';
import AnimationView from '../scenes/AnimationView';
const Stack = createNativeStackNavigator();
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Help" onPress={() => alert('Link to help')} />
    </DrawerContentScrollView>
  );
};

const Root = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Register" component={RegisterUser} />
    </Drawer.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={Root}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Register" component={RegisterUser} />
        <Stack.Screen name="View" component={ViewUser} />
        <Stack.Screen name="AnimationView" component={AnimationView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
