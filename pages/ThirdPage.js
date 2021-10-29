import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';

// const ThirdPage = ({ navigation }) => {
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
//             This is Contact Page
//           </Text>
//           <Button
//             // onPress={() => navigation.navigate('FirstPage')}
//             title="You are in Contact Page"
//           />

//         </View>

//       </View>
//     </SafeAreaView>
//   );
// };

// export default ThirdPage;
class ThirdPage extends React.Component {
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
              This is Contact Page
            </Text>
            <Button
              // onPress={() => navigation.navigate('FirstPage')}
              title="You are in Contact Page"
            />

          </View>

        </View>
      </SafeAreaView>
    );
  };
}
export default ThirdPage;

