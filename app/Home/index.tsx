import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>test</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
   
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});