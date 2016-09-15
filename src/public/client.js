
class SearchBox extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log("clicked search");
  /*  $.get( "  https://maps.googleapis.com/maps/api/place/textsearch/xml?query=restaurants+in+Sydney&key=AIzaSyCuu4qJwbc6h_M_Tc-uQoORF5g4o-pmito" )
    .done(function( data ) {
    console.log(data );
  });
*/
  }
  render() {
    return (
      <div className="searchBox">
        <div className="welcomeText">Enter your location:</div>
        <div className="searchWrapper">
          <form>
            <input type="text" placeholder="Enter location" />
          <div className="submitButton" onClick={this.handleClick}>SEARCH</div>
          </form>

          </div>
      </div>
    );
   }
 }


ReactDOM.render(
  <SearchBox />,
  document.getElementById('content')
);


//https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670,151.1957&radius=500&types=food&name=cruise&key=AIzaSyCuu4qJwbc6h_M_Tc-uQoORF5g4o-pmito
