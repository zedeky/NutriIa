import Header from '@/components/Header';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Stack, useRouter } from 'expo-router';
import React, { useEffect, useRef } from 'react';
import { Button, SafeAreaView, Text, View } from 'react-native';
import styles from './CameraScreen.styles';

export default function CameraScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!permission) {
      requestPermission();
    }
  }, [permission]);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      router.push({
        pathname: '/ResultadoAutomaticoScreen',
        params: { photoUri: photo.uri },
      });
    }
  };

  if (!permission?.granted) {
    return <Text>Solicitando permissão para a câmera...</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <Header />
      <CameraView
        ref={(ref) => {
          cameraRef.current = ref;
        }}
        style={styles.camera}
      />
      <View style={styles.buttonWrapper}>
        <Button title="Capturar" onPress={takePicture} />
      </View>
    </SafeAreaView>
  );
}
