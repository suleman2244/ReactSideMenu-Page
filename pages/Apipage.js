// import React, { useEffect, useState } from 'react';
// import { ActivityIndicator, Button, FlatList, Text, View,StyleSheet,Icon } from 'react-native';
// import { Card } from "react-native-elements";

// const ApiPage = (navigation) => {
//   const [isLoading, setLoading] = useState(true);
//   const [data, setData] = useState([]);

//   const getMovies = async () => {
//      try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//       const json = await response.json();
//       setData(json);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     getMovies();
//   }, []);

// return (

//   <View style={{ flex: 1, padding: 24 }}>

//     {isLoading ? <ActivityIndicator/> : (
//       <FlatList
//         data={data}
//         keyExtractor={({ id }, index) => id}
//         renderItem={({ item }) => (


//           <Card>
//           <Card.Title> <Text style={styles.userid}>userId:{ item.userId}{'\n'}</Text></Card.Title>
//            <Card.Divider/>


//      <Text style={styles.userid}>Id:{item.id}{'\n'}</Text>
//      <Text><Text style={styles.des}>Title:</Text>{'\n'}{item.title}{'\n'}</Text>
//      <Text><Text style={styles.des}>Description:</Text> {'\n'} {item.body}{'\n'}</Text>
//      <Button
//     icon={<Icon name='code' color='#ffffff' />}
//     buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
//     onPress={()=> navigation.navigate('SignupPage')}
//     title='VIEW NOW'  />

//      </Card>


//         )}
//       />

//     )}

//   </View>


// );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 24,
//     backgroundColor: "#eaeaea"
//   },
//   userid:{
//     fontSize:24,
//     textAlign:'center',
//     fontWeight:'bold',
//   },
// des:{
//   fontSize:24,
//   textAlign:'center',
//   fontWeight:'bold',

// }

// });
// export default ApiPage

import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View, Icon, StyleSheet, Button, navigation } from 'react-native';
import { Card } from "react-native-elements";

export default class ApiPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  async getMovies() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const json = await response.json();
      this.setState({ data: json });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { data, isLoading } = this.state;
    return (

      <View style={{ flex: 1, padding: 24 }}>

        {isLoading ? <ActivityIndicator /> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (


              <Card>
                <Card.Title> <Text style={styles.userid}>userId:{item.userId}{'\n'}</Text></Card.Title>
                <Card.Divider />


                <Text style={styles.userid}>Id:{item.id}{'\n'}</Text>
                <Text><Text style={styles.des}>Title:</Text>{'\n'}{item.title}{'\n'}</Text>
                <Text><Text style={styles.des}>Description:</Text> {'\n'} {item.body}{'\n'}</Text>
                <Button
                  icon={<Icon name='code' color='#ffffff' />}
                  buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                  onPress={() => this.props.navigation.navigate('')}
                  title='VIEW NOW' />

              </Card>


            )}
          />

        )}

      </View>


    );


  }
};


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