import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';

type UserType = {
  id: string; // ID do documento no Firestore (usado para salvar em subcoleção)
  name: string;
  email: string;
  senha: string;
  idade: number;
  altura: number;
  peso: number;
  metas: {
    gordura: number;
    proteina: number;
    carboidratos: number;
  };
};

type AuthContextType = {
  user: UserType | null;
  login: (userData: UserType) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => {},
  logout: async () => {},
  loading: true,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);

  const login = async (userData: UserType) => {
    setUser(userData);
    await AsyncStorage.setItem('@user', JSON.stringify(userData));
  };

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem('@user');
  };

  const loadUser = async () => {
    try {
      const stored = await AsyncStorage.getItem('@user');
      if (stored) {
        setUser(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Erro ao carregar usuário do AsyncStorage:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  useEffect(() => {
    console.log('🟢 Usuário atual no contexto:', user);
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
