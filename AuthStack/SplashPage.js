import React, { useEffect } from 'react'; import {
  View, Text, Animated,
  Easing
} from 'react-native';
export default function SplashPage({ navigation }) {


  RotateValueHolder = new Animated.Value(0);
  setTimeout(() => {
    navigation.navigate('LoginPage')
  }, 5000);

  useEffect(() => {
    StartImageRotate();
  }, []);

  const StartImageRotate = () => {
    RotateValueHolder.setValue(0);
    Animated.timing(RotateValueHolder, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start(() => StartImageRotate());
  }


  const RotateImage = RotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  return (
    <View style={{
      flex: 1, backgroundColor: 'gray', alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Animated.Image
        style={{
          width: 250,
          height: 250,
          transform: [{ rotate: RotateImage }],
        }}
        source={{ uri: 'https://engineering.fb.com/wp-content/uploads/2015/09/gllytqc8ze_lumgbaatztguaaaaabj0jaaab.jpg' }}
      />
    </View>
  );
}