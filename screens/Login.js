import React, { useState } from 'react';
import { TextInput, View, TouchableHighlight, Text, Image } from 'react-native';
import { styles } from '../css/styles';
import { styleInput } from '../css/login';
import { useNavigation } from '@react-navigation/native';

var connected = false;

const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(`Email: ${email}, Password: ${password}`);
    if(email == 'email' && password == '123'){
      console.log('Connecter');
      navigation.navigate('Menu');
    }
  };

  if(connected == true) {
      navigation.navigate('Menu');
  }

  return (
    <View style={styleInput.container}>
      <Image style={styleInput.logo} source={require('../assets/snack-icon.png')} />
      <TextInput
        style={styleInput.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        placeholderTextColor="#8B8B8B"
        autoCapitalize="none"
      />
      <TextInput
        style={styleInput.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Mot de passe"
        placeholderTextColor="#8B8B8B"
        secureTextEntry
      />
      <TouchableHighlight  onPress={handleLogin} style={styleInput.buttonLogin} underlayColor="#082F4B">
        <Text style={styleInput.buttonText}>Connexion</Text>
      </TouchableHighlight>
      <Text style={styles.link, styleInput.forgetPassword}>
        Je n'ai pas de compte.{' '}
        <Text
          style={styles.link}
          onPress={() => navigation.navigate('Register')}
        >
          S'inscrire
        </Text>
      </Text>
      <Text>Mot de passe oublié</Text>
    </View>
  );
};

export default Login;
