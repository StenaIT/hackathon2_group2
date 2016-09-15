import express from 'express';
import twitterSvc from './services/twitterService';
import googlePlacesSvc from './services/GooglePlacesService';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/searchTweet', (req, res) => {
  console.log('A request to twitter!');
  const params = req.query;
  twitterSvc.search(params, (error, data) => {
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
  const params = req.query
  googlePlacesSvc.searchGooglePlaces(params, (error, data) => {
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
