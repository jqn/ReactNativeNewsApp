import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import PropTypes from 'prop-types';
import ArticleCard from './ArticleCard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const TopStories = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={this.state.articles}
        ListHeaderComponent={<Text style={styles.headerText}>Top Stories</Text>}
        renderItem={({item, index}) => {
          return <ArticleCard index={index} {...item} />;
        }}
        keyExtractor={(item) => `${item.publishedAt}-${item.title}`}
      />
    </View>
  );
};

TopStories.defaultProps = {};

TopStories.propTypes = {};

export default TopStories;
