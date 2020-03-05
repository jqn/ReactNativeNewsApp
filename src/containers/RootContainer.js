import React from 'react';
import {View} from 'react-native';
import styles from './Styles/RootContainerStyles';
import NewsContainer from './NewsContainer';

const RootContainer = () => (
  <View style={styles.mainContainer}>
    <NewsContainer />
  </View>
);

export default RootContainer;
