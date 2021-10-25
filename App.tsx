import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {makeStyles} from 'react-native-elements';

const App = () => {
  const styles = useStyles();
  return (
    <NavigationContainer>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}>
        <View>
          <Text>Hello World</Text>
        </View>
      </ScrollView>
    </NavigationContainer>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default App;
