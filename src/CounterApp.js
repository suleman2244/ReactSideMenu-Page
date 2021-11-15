// import React, { Component } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
// } from "react-native";
// import counter from '../pages/Counter'
// import { connect } from 'react-redux'
// function CounterApp() {



//   return (
//     <View style={styles.container}>
//       <View style={{ flexDirection: 'row', width: 200, justifyContent: 'space-around' }}>
//         <TouchableOpacity onPress={() => increaseCounter()}>
//           <Text style={{ fontSize: 20 }}>Increase</Text>
//         </TouchableOpacity>
//         <Text style={{ fontSize: 20 }}>{counter}</Text>
//         <TouchableOpacity onPress={() => decreaseCounter()}
//           disabled={counter <= 0} >

//           <Text style={{ fontSize: 20 }}>Decrease</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }


// function mapStateToProps(state) {
//   return {
//     counter: state.counter
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     increaseCounter: () => dispatch({ type: 'INCREASE_COUNTER' }),
//     decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' }),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(CounterApp)


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// });