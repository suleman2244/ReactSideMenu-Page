import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, FlatList, Text, View, StyleSheet, Icon } from 'react-native';
import { Card } from "react-native-elements";


const ApiPage = ({ navigation }) => {
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

      {isLoading ? <ActivityIndicator /> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (


            <Card>
              <Card.Title><Text style={styles.userid}>Id:{item.id}{'\n'}</Text> </Card.Title>
              <Card.Divider />



              <Text><Text style={styles.des}>Title:</Text>{'\n'}{item.title}{'\n'}</Text>
              <Text><Text style={styles.des}>Description:</Text> {'\n'} {item.body}{'\n'}</Text>
              <Button
                icon={<Icon name='code' color='#ffffff' />}
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                onPress={() => {
                  navigation.navigate('ApPage', {
                    itemId: item.id,
                  })
                }}

                title='VIEW NOW' />

            </Card>


          )}
        />

      )}

    </View>


  );
}
export default ApiPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea"
  },
  userid: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  des: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',

  }

});


