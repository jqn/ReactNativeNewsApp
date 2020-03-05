import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './ArticleStyles';
import formatDistanceStrict from 'date-fns/formatDistanceStrict';

const ArticleRow = ({title, publishedAt, source, index, url}) => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.row}>
        <View style={styles.numberContainer}>
          <Text style={styles.number}>{index + 1}</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.source}>{source.name}</Text>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.publishedAt}>
            {formatDistanceStrict(new Date(publishedAt), new Date(), {
              addSuffix: true,
            })}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ArticleRow;
