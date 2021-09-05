import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import Navigation from './App/Config/Navigation';

function App() {
  return (
    <View style={{flex:1}}>
      <Navigation/>
    </View>
  );
}

export default App;
