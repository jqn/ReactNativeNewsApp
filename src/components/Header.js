import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import PropTypes from 'prop-types';
import {DateTime} from 'luxon';

const now = DateTime.now();

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#8D8D94',
  },
  title: {
    fontSize: 34,
    fontFamily: 'System',
    fontWeight: '900',
    color: '#000',
  },
  subTitle: {
    fontSize: 34,
    fontFamily: 'System',
    fontWeight: '900',
    color: '#8D8D94',
    lineHeight: 34,
  },
  icon: {
    width: 24,
    height: 39,
    resizeMode: 'cover',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'baseline',
  },
});

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image style={styles.icon} source={require('../images/pear.png')} />
        <Text style={[styles.title, styles.topPadding]}>News</Text>
      </View>
      <Text style={styles.subTitle}>{now.toFormat('LLLL d')}</Text>
    </View>
  );
};

Header.defaultProps = {};

Header.propTypes = {};

export default Header;
