import { router } from 'expo-router';
import { useEffect } from 'react';

export default function IndexRedirect() {
  useEffect(() => {
    // Aguarde o layout ser montado antes de redirecionar
    const timeout = setTimeout(() => {
      router.replace('/screens/WelcomeScreen/WelcomeScreen');
    }, 0);

    return () => clearTimeout(timeout);
  }, []);

  return null;
}
