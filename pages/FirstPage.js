import * as React from 'react';
import { Button, View, Text, SafeAreaView, Icon, navigation, StyleSheet, ScrollView } from 'react-native';
import { Card } from "react-native-elements";
import Counter from './Counter';



// const FirstPage = ({ navigation }) => {
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <View style={{ flex: 1, padding: 16 }}>
//         <View
//           style={{
//             flex: 1,
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}>
//           <Text
//             style={{
//               fontSize: 25,
//               textAlign: 'center',
//               marginBottom: 16,
//             }}>
//             This is the Home Page
//           </Text>
//           <Button

//             title="You are in Home Page"
//           />


//         </View>

//       </View>
//     </SafeAreaView>
//   );
// };

// export default FirstPage;



class FirstPage extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 16 }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 25,
                textAlign: 'center',
                marginBottom: 16,
              }}>
              This is the Home Page
            </Text>
            <Button

              title="You are in Home Page"
            />

            <View style={styles.btnOne}><Button title='Counter' onPress={() => this.props.navigation.navigate('Counter')} /></View>


            <View style={styles.btnTwo}><Button title='Api Page' onPress={() => this.props.navigation.navigate('ApiPage')} /></View>


            <View style={styles.btnThree}><Button title='Api Page Two' onPress={() => this.props.navigation.navigate('ApiPageTwo')} /></View>

            <View style={styles.btnFour}><Button title='Api Page Three' onPress={() => this.props.navigation.navigate('ApiPageThree')} /></View>

            <View style={styles.btnFive}><Button title='Map Api' onPress={() => this.props.navigation.navigate('MapApi')} /></View>






          </View>

        </View>
      </SafeAreaView>
    );
  };
}

export default FirstPage;
const styles = StyleSheet.create({
  btnOne: {
    width: 170,
    height: 170,
    marginTop: '5%'


  },
  btnTwo: {
    width: 170,
    height: 170,
    marginTop: '-30%'
  },
  btnThree: {
    width: 170,
    height: 170,
    marginTop: '-30%'
  },
  btnFour: {
    width: 170,
    height: 170,
    marginTop: '-30%'
  },
  btnFive: {
    width: 170,
    height: 170,
    marginTop: '-30%'
  }



});