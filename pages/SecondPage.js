import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';

const SecondPage = ({ navigation }) => {

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
            This is About Page
          </Text>
          <Button
            title="You are in About Page"
          // onPress={() => navigation.navigate('FirstPage')}
          />

        </View>

      </View>
    </SafeAreaView>
  );
};

export default SecondPage;



// class SecondPage extends React.Component {
//   render() {
//     return (
//       <SafeAreaView style={{ flex: 1 }}>
//         <View style={{ flex: 1, padding: 16 }}>
//           <View
//             style={{
//               flex: 1,
//               alignItems: 'center',
//               justifyContent: 'center',
//             }}>
//             <Text
//               style={{
//                 fontSize: 25,
//                 textAlign: 'center',
//                 marginBottom: 16,
//               }}>
//               This is About Page
//             </Text>
//             <Button
//               title="You are in About Page"
//             // onPress={() => navigation.navigate('FirstPage')}
//             />

//           </View>

//         </View>
//       </SafeAreaView>
//     );
//   };
// }
// export default SecondPage;