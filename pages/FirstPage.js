import * as React from 'react';
import { Button, View, Text, SafeAreaView, Icon } from 'react-native';
import { Card } from "react-native-elements";



const FirstPage = ({ navigation }) => {
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


        </View>

      </View>
    </SafeAreaView>
  );
};

export default FirstPage;



// class FirstPage extends React.Component {
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
//               This is the Home Page
//             </Text>
//             <Button

//               title="You are in Home Page"
//             />


//           </View>

//         </View>
//       </SafeAreaView>
//     );
//   };
// }

// export default FirstPage;