import * as React from 'react';
import { Button, View, Text, SafeAreaView, style, Icon } from 'react-native';
import strings from '../Localization/LocalizedStrings';
import { Card } from "react-native-elements";
const SecondPage = ({ navigation }) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>


      <Text
        style={{
          fontSize: 25,
          textAlign: 'center',
          marginBottom: 16,
        }}>
        {`${strings.welcomeAbout}`}
      </Text>






      <View style={{ width: '70%', height: '30%', flexDirection: 'row', marginLeft: '20%', }} >
        <Card >
          <Card.Title> Access Camera Here</Card.Title>
          <Card.Divider />
          <Button
            style={{ marginBottom: "5%" }}
            title={`${strings.openCamera}`}
            icon={<Icon name='code' color='#ffffff' />}
            color="#0080ff"
            onPress={() => navigation.navigate('Camera')} />

        </Card>
      </View>

      <View style={{ width: '55%', height: '30%', flexDirection: 'row', marginLeft: '20%', }} >
        <Card >
          <Card.Title> Access Call Number Here</Card.Title>
          <Card.Divider />
          <Button
            title={`${strings.callNumber}`}
            color="#0080ff"
            onPress={() => navigation.navigate('callNumber')} />
        </Card>

      </View>


      <View style={{ width: '55%', height: '30%', flexDirection: 'row', marginLeft: '20%', }} >
        <Card >
          <Card.Title> Access Local Storage Here</Card.Title>
          <Card.Divider />

          <Button
            title={`${strings.AsynStorage}`}
            color="#0080ff"
            onPress={() => navigation.navigate('aysncStorage')} />
        </Card>
      </View>






    </SafeAreaView>
  );
};

export default SecondPage;



