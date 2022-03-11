import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Clients from './Pages/Clients';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <Clients/>
    <StatusBar style="auto" />
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  /*  alignItems: 'center',
    justifyContent: 'center',
    padding:10,
    margin:12*/
  },
});
