import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, FlatList, Text, View,Image,TouchableOpacity,renderItemComponent,StyleSheet } from 'react-native';


const ApiPageThree = (navigation,onPress) => {
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

      {isLoading ? <ActivityIndicator/> : (
        <FlatList


          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (


          <View style={{flex:1}}>

             <Text style={styles.id}> Album Id:{item.albumId}{"\n"}Item id:{item.id}</Text>
           <Image style={styles.image} source={{ uri: item.url }}></Image>
           <Image style={styles.imagetwo} source={{uri:item.thumbnailUrl}}></Image>

           </View>


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
  id:{
    fontSize:24,
    textAlign:'center',
    fontWeight:'bold',
  },
  image:{

    width:100,
    height:100
  },
  imagetwo:{
    marginTop:20,
    height:100,
    width:100

  }

});
export default ApiPageThree
