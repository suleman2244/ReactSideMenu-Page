import React, { useEffect, useState, Component } from 'react';
import { ActivityIndicator, Button, FlatList, Text, View } from 'react-native';


// const ApiPageTwo = (navigation,onPress) => {
//   const [isLoading, setLoading] = useState(true);
//   const [data, setData] = useState([]);


//   const getMovies = async () => {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users');

//       const json = await response.json();
//       setData(json);


//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(async() => {
//    await getMovies();
//   },[] );

// return (
//   <View style={{ flex: 1, padding: 24 }}>
//     {isLoading ? <ActivityIndicator/> : (
//      <FlatList
//         data={data}
//         keyExtractor={({ id }, index) => id}
//         renderItem={({ item }) => (
//           <Text>{item.id  },{item.username},{item.email},{item.phone}{item.website}{item.address.street} </Text>
//         )}
//       />

//     )}

//   </View>
// );
// };
// export default ApiPageTwo


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  async getMovies() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
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
              <Text>{item.id},{item.username},{item.email},{item.phone}{item.website}{item.address.street} </Text>
            )}
          />

        )}

      </View>
    );

  }
};