import { Text, View, ScrollView, SafeAreaView, StyleSheet, Image } from 'react-native';
import { styles } from '../css/styles';
import Post from './Components/Post';

export default function Home() {
  // Exemple de données
  const data = [
    { titre: 'Titre 1', description: 'Description 1' },
    { titre: 'Titre 2', description: 'Description 2' },
    { titre: 'Titre 3', description: 'Description 1' },
    { titre: 'Titre 4', description: 'Description 2' },
  ];

  return (
      <View horizontal={true} style={styles.screen, styles.flexDirectionRow}>
        {data.map((item, index) => (
          <Post key={index} text={item.titre} />
        ))}
      </View>
  );
}
