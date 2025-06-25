// app/(tabs)/_layout.tsx
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';





export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#5A4FCF',
        tabBarInactiveTintColor: '#333',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: {
          backgroundColor: '#f8f4ff',
          height: 65,
          paddingBottom: 10,
          paddingTop: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Principal',
          tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="progresso"
        options={{
          title: 'Progresso',
          tabBarIcon: ({ color, size }) => <Ionicons name="analytics-outline" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="historico"
        options={{
          title: 'Histórico',
          tabBarIcon: ({ color, size }) => <Ionicons name="time" color={color} size={size} />,
        }}
      />

      {/* Esconder essas da tab bar */}
      <Tabs.Screen name="explore" options={{ href: null }} />
      <Tabs.Screen name="registrarR" options={{ href: null }} />
      <Tabs.Screen name="notificacoes" options={{ href: null }} />
      <Tabs.Screen name="perfil" options={{ href: null }} />
      <Tabs.Screen name="registrarManual" options={{ href: null }} />
      <Tabs.Screen name="CameraScreen" options={{ href: null }} />
      <Tabs.Screen name="ResultadoAutomaticoScreen" options={{ href: null }} />
      <Tabs.Screen name="metas" options={{ href: null }} />
    </Tabs>
  );
}
