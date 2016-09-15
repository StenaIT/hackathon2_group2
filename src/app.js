import express from 'express';
import TwitterService from './services/twitterService';
import GooglePlacesService from './services/GooglePlacesService';

const google = new GooglePlacesService();
const twitter = new TwitterService();

const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/test', (req, res) => {
  twitter.test();
  res.send('Test');
});

app.get('/searchTwitter', (req, res) => {
  console.log('A request to twitter!');
  const searchText = req.query.searchText;
  twitter.search(searchText, (error, data) => {
    if (error) {
      console.log(error);
      res.send(error)
    } else {
      console.log('Success from twitter!');
      res.send(data);
    }
  });
});

app.get('/searchGoogle', (req, res) => {
  console.log('A request to Google!');
  const params = {
    query: req.query.searchText
  };
  google.searchGooglePlaces(params, (error, data) => {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      console.log('Success from google!');
      res.send(data);
    }
  });
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
