import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Button, Card } from 'react-native-paper';

export default function App() {
  console.log('Probando primera');
  return (
    <PaperProvider>
      <SafeAreaView>
        <Text>Probando dos</Text>
        <Button
          icon='camera'
          mode='contained'
          onPress={() => console.log('Pressed')}>
          PRUEBA TRES
        </Button>
      </SafeAreaView>
    </PaperProvider>
  );
}