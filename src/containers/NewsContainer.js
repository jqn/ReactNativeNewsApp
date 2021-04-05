import React, {Component} from 'react';
import {FlatList, Text, View} from 'react-native';
import styles from './Styles/NewsContainerStyles';
import axios from 'axios';
import ArticleRow from '../components/ArticleRow/ArticleRow';
import Header from '../components/Header';
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
        headers: {Authorization: '25dff1b564fc45caa463102771594e5c'}, // Replace yournewsapikey with your key
      });
      console.log(response.data.articles);
      this.setState({
        loading: response.loading,
        articles: response.data.articles,
      });
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
      } else {
        // Something happened in setting up the request that triggered an Error
      }
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <FlatList
          data={this.state.articles}
          ListHeaderComponent={
            <Text style={styles.headerText}>Top Headlines</Text>
          }
          renderItem={({item, index}) => {
            return <ArticleRow index={index} {...item} />;
          }}
          keyExtractor={(item) => `${item.publishedAt}-${item.title}`}
        />
      </View>
    );
  }
}

export default NewsContainer;
