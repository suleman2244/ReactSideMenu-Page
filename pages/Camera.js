import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';
import { Button } from 'react-native-elements/dist/buttons/Button';
import RNFS from 'react-native-fs';

export default function Camera() {
  const [{ cameraRef }, { takePicture }] = useCamera(null);
  const captureHandler = async () => {
    try {
      const data = await takePicture();
      console.log(data.uri);
      const filePath = data.uri;
      const newFilePath = RNFS.ExternalDirectoryPath + '/myTest.jpg'
      RNFS.moveFile(filePath, newFilePath)
        .then(() => {
          console.log('Image Moved', filePath, '--to--', newFilePath)
        }).catch((error) => {
          console.log(error);
        });
    }
    catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={styles.container}>
      <RNCamera
        ref={cameraRef}
        type={RNCamera.Constants.Type.back}
        style={styles.preview}>
        <Button
          title="Take a picture"
          color='#1eb900'
          onPress={() => captureHandler()} />

      </RNCamera>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'

  }
});