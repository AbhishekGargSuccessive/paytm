import React from 'react';
import {Button, SafeAreaView, StyleSheet} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Button title="Create Payment" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
