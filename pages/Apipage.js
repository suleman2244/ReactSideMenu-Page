import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, FlatList, Text, View,StyleSheet,Card } from 'react-native';


const ApiPage = (navigation,onPress) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
     try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const json = await response.json();
      setData(json);
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


      <View>

      <Text style={styles.userid}>userId:{ item.userId}{'\n'}</Text>
       <Text style={styles.userid}>Id:{item.id}{'\n'}</Text>
       <Text><Text style={styles.des}>Title:</Text>{'\n'}{item.title}{'\n'}</Text>
       <Text><Text style={styles.des}>Description:</Text> {'\n'} {item.body}{'\n'}</Text>

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
  userid:{
    fontSize:24,
    textAlign:'center',
    fontWeight:'bold',
  },
des:{
  fontSize:24,
  textAlign:'center',
  fontWeight:'bold',

}

});
export default ApiPage