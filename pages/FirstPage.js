import * as React from 'react';
import { Button, View, Text, SafeAreaView, Icon, navigation, StyleSheet, ScrollView, Alert } from 'react-native';
import { Card, cardGap, cardWidth } from "react-native-elements";
import Counter from './Counter';
import Authuser from '../AuthStack/Authuser';
import { useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import darkColors from 'react-native-elements/dist/config/colorsDark';
import strings from '../Localization/LocalizedStrings';


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



const FirstPage = ({ route, navigation }) => {





  return (
    <SafeAreaView style={{}}>
      {/* <Button title="Sign Out" onPress={() => this.props.signOutUser()} /> */}






      <Text
        style={{
          fontSize: 25,
          textAlign: 'center',
          marginBottom: 16,
          marginTop: 5,
        }}>
        {`${strings.Welcome}`}
      </Text>



      <View style={{ width: '35%', height: '30%', flexDirection: 'row', marginLeft: '20%', }} >
        <Card >
          <Card.Title> {`${strings.Access}`}</Card.Title>
          <Card.Divider />
          <View style={styles.btnOne}>
            <Button title={`${strings.Accessbutton}`}
              icon={<Icon name='code' color='#ffffff' />}
              // buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, }}
              onPress={() => navigation.navigate('ApiPage')} /></View>
        </Card>
      </View>

      <View style={{ width: '35%', height: '30%', flexDirection: 'row', marginTop: '0%', marginLeft: '20%' }}>
        <Card>
          <Card.Title> {`${strings.Acess_two}`}</Card.Title>
          <Card.Divider />
          <View style={styles.btnOne}>
            <Button title={`${strings.AccessbuttonTwo}`}
              icon={<Icon name='code' color='#ffffff' />}
              buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
              onPress={() => navigation.navigate('ApiPageThree')} /></View>
        </Card>
      </View>

      <View style={{ width: '35%', height: '30%', flexDirection: 'row', marginTop: '0%', marginLeft: '20%' }}>
        <Card>
          <Card.Title>{`${strings.AccessThree}`}</Card.Title>
          <Card.Divider />
          <View style={styles.btnOne}>
            <Button title={`${strings.AccessbuttonThree}`}
              icon={<Icon name='code' color='#ffffff' />}
              buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
              onPress={() => navigation.navigate('ApiPageTwo')} /></View>
        </Card>
      </View>


      {/* <View style={styles.cardFour}>
            <Card>
              <Card.Title> {`${strings.AccessThree}`}</Card.Title>
              <Card.Divider />
              <View style={styles.btnOne}>
                <Button title={`${strings.AccessbuttonThree}`}
                  icon={<Icon name='code' color='#ffffff' />}
                  buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                  onPress={() => navigation.navigate('ApiPageThree')} /></View>
            </Card>
          </View> */}








      {/*
          <View style={styles.btnFive}><Button title='Map Api' onPress={() => navigation.navigate('MapApi')} /></View>

          <Button title='Sign Out' onPress={() => signOutUser()} /> */}











    </SafeAreaView>
  );
};


export default FirstPage;
const styles = StyleSheet.create({
  btnOne: {
    width: 170,
    height: 170,
    marginTop: '5%'


  },
  // cardOne: {

  //   height: '50%',
  //   width: '50%',
  //   justifyContent: 'center',
  // },
  // cardTwe: {

  //   height: '50%',
  //   width: '50%',
  //   justifyContent: 'center',
  // },
  // cardThree: {

  //   height: '35%',
  //   width: '20%',
  //   justifyContent: 'space-between',

  // },
  // cardFour: {

  //   height: '35%',
  //   width: '20%',

  //   justifyContent: 'space-between',
  // },

  // btnTwo: {
  //   width: 170,
  //   height: 170,
  //   marginTop: '-30%'
  // },
  // btnThree: {
  //   width: 170,
  //   height: 170,
  //   marginTop: '-30%'
  // },
  // btnFour: {
  //   width: 170,
  //   height: 170,
  //   marginTop: '-30%'
  // },
  // btnFive: {
  //   width: 170,
  //   height: 170,
  //   marginTop: '-30%'
  // },

  auth: {
    fontSize: 20,

  },



});