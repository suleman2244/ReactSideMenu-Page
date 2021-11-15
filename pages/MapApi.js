// Integration of Google map in React Native using react-native-maps
// https://aboutreact.com/react-native-map-example/

// Import React
import React from 'react';
// Import required components
import { SafeAreaView, StyleSheet, View } from 'react-native';

// Import Map and Marker
import MapView, { Marker } from 'react-native-maps';


const markers = [
  {
    id: 0,

    coordinate: {
      latitude: 31.4114616,
      longitude: 73.1159863,
    },
    'title': 'Khaadi Clotehes',
    'description': "Faislabad Pakistan"
  },
  {
    id: 1,

    coordinate: {
      latitude: 24.882454,
      longitude: 67.090414,
    },
    'title': 'Khaadi Clotehes',
    'description': " Karachi, Pakistan"
  },
  {
    id: 2,

    coordinate: {
      latitude: 31.520568750000002,
      longitude: 74.3511197982244,
    },
    'title': 'Khaadi Clotehes',
    'description': 'commercial, Gulberg, Pakistan'
  },


  {
    id: 3,
    coordinate: {
      latitude: 31.5206338,
      longitude: 74.3511295,
    },
    'title': 'Khaadi Clotehes',
    'description': 'clothes, Gulberg, Pakistan'
  },

  {
    id: 4,

    coordinate: {
      latitude: 24.8767498,
      longitude: 67.0629522,
    },
    'title': 'Khaadi Clotehes',
    'description': 'Khaadi, clothes, Karachi, Pakistan'
  },
  {
    id: 5,

    coordinate: {
      latitude: 29.39358672259982,
      longitude: 71.68874665513466,
    },
    'title': 'Khaadi Clotehes',
    'description': 'Abbtobad, Pakistan'
  },
  {
    id: 6,

    coordinate: {
      latitude: 31.516011692086565,
      longitude: 74.29590620905645,
    },
    'title': 'Khaadi Clotehes',
    'description': 'Allama Iqbal Town'
  },
  {
    id: 6,

    coordinate: {
      latitude: 24.88129901118662,
      longitude: 67.06649089550847,
    },
    'title': 'Khaadi Clotehes',
    'description': 'Bhadur Yar Jang'
  },
  {
    id: 6,

    coordinate: {
      latitude: 29.39359607029883,
      longitude: 71.68866082444758,
    },
    'title': 'Khaadi Clotehes',
    'description': 'Bhawalpur Punjab'
  },
];

const MapApi = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          // initialRegion={{


          //   latitude: 31.5206338,
          //   longitude: 74.3511295,
          //   latitudeDelta: 0.0922,
          //   longitudeDelta: 0.0421,
          // }}


          customMapStyle={mapStyle}>
          {/* <Marker
            draggable
            coordinate={{
              latitude: 31.5206338,
              longitude: 74.3511295,
            }}


            onDragEnd={
              (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
            }
            title={'Khaadi Clothes'}
            description={'Khaadi Clothes in Lahore Gulberg Pakistan'}

          /> */}
          {markers.map((item, idx) => {
            return (
              <MapView.Marker key={idx}
                coordinate={item.coordinate}
                title={item.title} description={item.description}
              />
            )
          })
          }




        </MapView>
      </View>
    </SafeAreaView>
  );
};

export default MapApi;

const mapStyle = [
  { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#d59563' }],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#d59563' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{ color: '#263c3f' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#6b9a76' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: '#38414e' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#212a37' }],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#9ca5b3' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{ color: '#746855' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#1f2835' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#f3d19c' }],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{ color: '#2f3948' }],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#d59563' }],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#17263c' }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#515c6d' }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#17263c' }],
  },
];

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});