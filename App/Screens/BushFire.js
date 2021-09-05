import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

function BushFire() {
  const [CurrentLocation, setCurrentLocation] = useState({});
  const [data, setdata] = useState([]);

  useEffect(() => {
    Geolocation.getCurrentPosition(info =>
      setCurrentLocation({
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,
      }),
    );
    console.log(CurrentLocation);
  }, []);

  useEffect(() => {
    fetch(
      'https://services9.arcgis.com/kQtExguYa1aPRlz7/arcgis/rest/services/Waze_Live_Alerts_View/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json',
    )
      .then(response => response.json())
      .then(data => setdata(data.features));
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: CurrentLocation.latitude,
          longitude: CurrentLocation.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          coordinate={{
            latitude: CurrentLocation.latitude,
            longitude: CurrentLocation.longitude,
          }}
          pinColor={'green'} // any color
          title={'Your Location'}
          description={''}
        />
        {data.map((e, i) => {
          return (
            <Marker
              key={i}
              coordinate={{
                latitude: e.geometry.y,
                longitude: e.geometry.x,
              }}
              pinColor={'orange'} // any color
              title={e.attributes.city}
              description={e.attributes.street}
            />
          );
        })}
      </MapView>
    </View>
  );
}

export default BushFire;
