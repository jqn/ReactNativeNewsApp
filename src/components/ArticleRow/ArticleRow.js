import React, {useState} from 'react';
import {Modal, View, Text, TouchableOpacity} from 'react-native';
import styles from './ArticleStyles';
import formatDistanceStrict from 'date-fns/formatDistanceStrict';

import {EmbeddedWebView} from '../EmbeddedWebView/EmbeddedWebView';

const ArticleRow = ({title, publishedAt, source, index, url}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <TouchableOpacity onPress={() => setModalVisible(true)}>
      <Modal animationType="slide" transparent visible={modalVisible}>
        <TouchableOpacity
          style={styles.rowContainer}
          onPress={() => setModalVisible(false)}
        />
        <EmbeddedWebView url={url} />
      </Modal>
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
