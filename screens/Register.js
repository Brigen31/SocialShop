import React, { useState } from 'react';
import { TextInput, View, TouchableHighlight, Text } from 'react-native';
import { styles } from '../css/styles';
import { styleInput } from '../css/login';
import { useNavigation } from '@react-navigation/native';

var connected = false;

const Register = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pseudo, setPseudo] = useState('');
  const [date, setDate] = useState('');
  const [pays, setPays] = useState('');
  const [adresse, setAdresse] = useState('');

  const handleLogin = () => {
    console.log('Inscrit');
    navigation.navigate('Login');
  };

  if(connected == true) {
      navigation.navigate('Home');
  }

  return (
    <View style={styleInput.container}>
      <Text style={styleInput.inscriptionText}>Inscription</Text>
      <TextInput
        style={styleInput.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        placeholderTextColor="#8B8B8B"
        autoCapitalize="none"
        maxLength={5}
      />
      <TextInput
        style={styleInput.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Mot de passe"
        placeholderTextColor="#8B8B8B"
        secureTextEntry
      />
      <TextInput
        style={styleInput.input}
        value={pseudo}
        onChangeText={setPseudo}
        placeholder="Pseudo"
        placeholderTextColor="#8B8B8B"
        autoCapitalize="none"
      />
      <TextInput
        style={styleInput.input}
        value={date}
        onChangeText={setDate}
        placeholder="Date de naissance"
        placeholderTextColor="#8B8B8B"
        autoCapitalize="none"
      />
      <TextInput
        style={styleInput.input}
        value={pays}
        onChangeText={setPays}
        placeholder="Pays"
        placeholderTextColor="#8B8B8B"
        autoCapitalize="none"
      />
      <TextInput
        style={styleInput.input}
        value={adresse}
        onChangeText={setAdresse}
        placeholder="Adresse"
        placeholderTextColor="#8B8B8B"
        autoCapitalize="none"
      />
      <TouchableHighlight  onPress={handleLogin} style={styleInput.buttonLogin} underlayColor="#082F4B">
        <Text style={styleInput.buttonText}>Inscription</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Register;
