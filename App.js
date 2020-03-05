/**
 * Sample React Native News App
 * https://github.com/jqn/react-native-news-app
 *
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import styles from './src/containers/Styles/ApplicationStyles';
import RootContainer from './src/containers/RootContainer';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <RootContainer />
    </SafeAreaView>
  );
};

export default App;
