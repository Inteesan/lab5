import React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

const HomeScreen=({ navigation })=>{
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
  <Button onPress={()=> navigation.navigate('Notifications')} title="Go to notifications" />
  </View>
  );
}
const NotificationsScreen=({ navigation })=>{
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
  <Button onPress={()=> navigation.navigate('About')} title="Go to about" />
  </View>
  );
}
const AboutScreen =({navigation })=>{
return(
<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
<Button onPress={()=> navigation.navigate('Home')} title="Go back home"/>
</View>
);
}

const Drawer = createDrawerNavigator();

export default function App(){
  return(
  <NavigationContainer>
  <Drawer.Navigator initialRouteNAme="Home">
  <Drawer.Screen name="Home" component={HomeScreen}/>
  <Drawer.Screen name="Notifications" component={NotificationsScreen}/>
  <Drawer.Screen name="About" component={AboutScreen} />
  </Drawer.Navigator>
  </NavigationContainer>
  );
}