import React, {Component} from 'react';
import {FlatList, Text, View} from 'react-native';
import styles from './Styles/NewsContainerStyles';
import axios from 'axios';
import ArticleRow from '../components/ArticleRow/ArticleRow';
import data from '../data';

class NewsContainer extends Component {
  state = {
    articles: [],
    loading: true,
  };

  componentDidMount() {
    this.requestTopHeadlines();
  }

  requestTopHeadlines = async () => {
    // Comment setState once you get a news api key
    // This supplies your app with placeholder content
    this.setState({
      loading: false,
      articles: data.articles, // placeholder data
    });
    try {
      const response = await axios({
        method: 'get',
        url: 'http://newsapi.org/v2/top-headlines?country=us',
        headers: {Authorization: 'yournewsapikey'}, // Replace yournewsapikey with your key
      });
      console.log('NewsContainer -> requestTopHeadlines -> response', response);
      console.log(response.data.articles);
      this.setState({
        loading: response.loading,
        articles: response.data.articles,
      });
    } catch (error) {
      console.log('NewsContainer -> requestTopHeadlines -> error', error);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log('data', error.response.data);
        console.log('status', error.response.status);
        console.log('headers', error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log('request', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log('config', error.config);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.articles}
          ListHeaderComponent={
            <Text style={styles.headerText}>Top Headlines</Text>
          }
          renderItem={({item, index}) => {
            console.log('item', item);
            return <ArticleRow index={index} {...item} />;
          }}
          keyExtractor={(item) => `${item.publishedAt}-${item.title}`}
        />
      </View>
    );
  }
}

export default NewsContainer;
