/*
* Ne pas utiliser des noms de propriétés CSS comme nom de variable
*
* paragraph et logo sont des exemples, vous pouvez les remplacer par autres choses
*/

import { StyleSheet } from 'react-native';

const cssVariables = {
  background_color: '#FFFFFF', // use -> cssVariables.background_color
};

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: cssVariables.background_color,
    //alignItems: 'center',
    //justifyContent: 'center',
    paddingHorizontal: 10 ,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});