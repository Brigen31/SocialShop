import { Text, View, StyleSheet, Image } from 'react-native';
import { styles } from '../css/styles';

export default function Quatre() {
  return (
    <View style={styles.screen}>
      <Text style={styles.paragraph}>
        AssetExemple2
      </Text>
      <Image style={styles.logo} source={require('../assets/snack-icon.png')} />
    </View>
  );
}
