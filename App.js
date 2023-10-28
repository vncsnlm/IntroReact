import { Button, StatusBar, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to React Native!</Text>
      <Button
        title="Press me"
        onPress={() => {
          // Handle button press
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0',  
    alignItems: 'center',
    justifyContent: 'center',
  },
});
