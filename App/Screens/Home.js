import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from 'react-native';

function Home() {
  const [Articles, setArticles] = useState([]);
  useEffect(() => {
    fetch(
      'https://content.guardianapis.com/search?q=bush%20fire&api-key=0b8fa855-7f27-4968-850e-e87c055d3914',
    )
      .then(response => response.json())
      .then(data => setArticles(data.response.results));
  }, []);

  return (
    <ScrollView style={{backgroundColor: '#404040'}}>
      {Articles.map((article, index) => {
        return (
          <View style={styles.postContainer} key={index}>
            <Text style={{fontSize: 17, fontWeight: 'bold'}}>
              {article.webTitle}
            </Text>
            <Text style={{fontStyle: 'italic', marginTop: 10}}>
              Published on: {new Date(article.webPublicationDate).toDateString()}
            </Text>
            <TouchableOpacity
              style={styles.readBtn}
              onPress={() => Linking.openURL(article.webUrl)}>
              <Text style={{color: 'white'}}>READ NOW</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    height: 150,
    padding: 5,
    marginHorizontal: 10,
    marginVertical: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  readBtn: {
    backgroundColor: '#404040',
    padding: 5,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 110,
  },
});

export default Home;
