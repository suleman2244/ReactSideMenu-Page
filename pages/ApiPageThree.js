import React, { useEffect, useState, Component } from 'react';
import {
  ActivityIndicator, Button, FlatList,
  Text, View, Image, TouchableOpacity, renderItemComponent,
  StyleSheet, Icon, navigation
} from 'react-native';
import { Card } from "react-native-elements";

const ApiPageThree = (navigation, onPress) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
      const json = await response.json();
      setData(json);
      console.log(json)
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);




  return (
    <View style={{ flex: 1, padding: 24 }}>

      {isLoading ? <ActivityIndicator /> : (
        <FlatList


          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (


            <Card>
              <Card.Title> <Text style={styles.id}>Item id:{item.id}</Text></Card.Title>
              <Card.Divider />


              <View ><Image style={styles.image} source={{ uri: item.url }}></Image></View>
              <View ><Image style={styles.image} source={{ uri: item.thumbnailUrl }}></Image></View>

              <Button
                icon={<Icon name='code' color='#ffffff' />}
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                onPress={() => this.props.navigation.navigate('ApiPage')}
                title='VIEW NOW' />

            </Card>



          )}
        />


      )}

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea"
  },
  id: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  image: {

    width: 100,
    height: 100,

    textAlign: 'center',
    justifyContent: 'center'

  },
  image: {
    marginTop: 20,
    height: 150,
    width: 150,
    marginBottom: 20
  }

});
export default ApiPageThree


