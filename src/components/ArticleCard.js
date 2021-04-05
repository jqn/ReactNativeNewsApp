import React from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const ArticalCard = () => {
  return <View style={styles.container} />;
};

ArticalCard.defaultProps = {};

ArticalCard.propTypes = {};

export default ArticalCard;
