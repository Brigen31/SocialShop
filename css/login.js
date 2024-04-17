/*
* Ne pas utiliser des noms de propriétés CSS comme nom de variable
*
* paragraph et logo sont des exemples, vous pouvez les remplacer par autres choses
*/

import { StyleSheet } from 'react-native';


const cssVariables = {
  background_color: '#FFFFFF', // use -> cssVariables.background_color
};

export const styleInput = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cssVariables.background_color,
    alignItems: 'center',
    //justifyContent: 'center',
    //verticalAlign: 'center',
    paddingHorizontal: 5 ,
  },
  buttonLogin: {
    borderRadius: 200,
    marginTop: 20,
    padding: 10,
    width: '70%',
    backgroundColor: '#082F4B',
    
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 500,
    textAlign: 'center',
    
  },
  input: {
    borderRadius: 200,
    marginTop: 20,
    padding: 15,
    width: '70%',
    backgroundColor: '#F1F1F1',
    color: 'black',
    
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 5,
  },
  logo: {
    height: 200,
    width: 200,
    marginTop: 1,
    marginBottom: 1,
  },
  inscriptionText: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: '30px',
  },
  forgetPassword: {
    marginTop: 15,
    marginBottom: 5,
  }
});