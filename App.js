import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
export default function App() {
  const [loaded] = useFonts({
    'GeneralSans-700': require('./src/assets/fonts/GeneralSans-Bold.otf'),
    'GeneralSans-600': require('./src/assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-400': require('./src/assets/fonts/GeneralSans-Regular.otf')
  });



  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={{
        fontFamily: "GeneralSans-400"
      }}>Open up App.js to start working on your app!</Text>
      <Text style={{
        fontFamily: "GeneralSans-600"
      }}>Open up App.js to start working on your app!</Text>
      <Text style={{
        fontFamily: "GeneralSans-700"
      }}>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
