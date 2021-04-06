import React from 'react';
import {Image, View, StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  image: {
    width: null,
    height: 260,
  },
  source: {
    color: '#3d3c41',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 3,
    fontFamily: 'System',
  },
  title: {
    fontSize: 26,
    fontWeight: '900',
    marginBottom: 10,
    fontFamily: 'System',
  },
  publishedAt: {
    color: '#8D8D94',
    fontSize: 12,
    fontFamily: 'System',
  },
  cardBody: {
    paddingVertical: 10,
  },
});

const ArticleCard = ({image, style}) => {
  return (
    <View style={styles.container}>
      <Image
        style={StyleSheet.flatten([styles.image, style])}
        source={{
          uri: image,
        }}
      />
      <View style={styles.cardBody}>
        <Text style={styles.source}>CNBC</Text>
        <Text style={styles.title}>
          U.S. ramps up vaccination pace as Michigan, other states see outbreaks
        </Text>
        <Text style={styles.publishedAt}>5 minutes ago</Text>
      </View>
    </View>
  );
};

ArticleCard.defaultProps = {
  image:
    'https://image.cnbcfm.com/api/v1/image/105154457-Credit_Suisse_.jpg?v=1571403193',
};

ArticleCard.propTypes = {};

export default ArticleCard;
