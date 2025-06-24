{/* 
import { Camera, CameraType } from 'expo-camera';
import React, { useEffect, useRef, useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);
  const cameraRef = useRef<Camera>(null);


  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photoData = await cameraRef.current.takePictureAsync();
      setPhoto(photoData.uri);
      console.log('Foto tirada:', photoData.uri);
    }
  };

  if (hasPermission === null) {
    return <View><Text>Solicitando permissão...</Text></View>;
  }

  if (hasPermission === false) {
    return <View><Text>Sem acesso à câmera</Text></View>;
  }

  return (
    <View style={{ flex: 1 }}>
      {photo ? (
        <>
          <Image source={{ uri: photo }} style={{ flex: 1 }} />
          <Button title="Tirar outra foto" onPress={() => setPhoto(null)} />
        </>
      ) : (
        <Camera ref={cameraRef} style={{ flex: 1 }}>
          <View style={styles.buttonContainer}>
            <Button title="Capturar" onPress={takePicture} />
          </View>
        </Camera>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    marginBottom: 36,
  },
});
*/}