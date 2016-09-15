import GooglePlaces from 'node-googleplaces';

class GooglePlacesService {
  constructor() {
    this.places = new GooglePlaces(process.env.GOOGLE_PLACES_API_KEY);
  }

  searchGooglePlaces(params, callback) {
    this.places.textSearch(params, (err, res) => {
      console.log(res.body);
      if (!err) {
        callback(null, res);
      } else {
        callback(err, null);
      }
    });
  }
}

export default GooglePlacesService;
