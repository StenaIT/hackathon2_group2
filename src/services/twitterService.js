import Twitter from 'twitter';

class TwitterService {
  constructor() {
    this.client = new Twitter({
      consumer_key: process.env.CONSUMER_KEY,
      consumer_secret: process.env.CONSUMER_SECRET,
      access_token_key: process.env.ACCESS_TOKEN_KEY,
      access_token_secret: process.env.ACCESS_TOKEN_SECRET
    });
  }

  search(params, callback) {
    client.get('search/tweets', params, function(error, tweets, response) {
      if (!error) {
        console.log(tweets);
        return callback(null, tweets);
      } else {
        callback(error, null);
      }
    });
  }
}

export default TwitterService;
