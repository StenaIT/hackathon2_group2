
class SearchBox extends React.Component {
  constructor() {
    super();
    this.state = {
        inputfield: ''
      };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({inputfield: event.target.value});
  }

  handleClick() {

    $.getJSON('http://localhost:3000/searchGoogle?searchText=restaurant+'+  this.state.inputfield)
    .done(function(result) {
      var obj = JSON.parse(result.text);
      ReactDOM.render(
      <RestaurantList list={obj.results}  />,
      document.getElementById('searchresult')
    );
  });
}

  render() {
    return (
      <div className="searchBox">
        <div className="welcomeText">Sök på stad</div>
        <div className="searchWrapper row">
        <form>
              <input type="text" placeholder="Skriv in stad" onChange={this.handleChange} />
            <div className="btn btn-block btn-lg btn-primary demobtn" onClick={this.handleClick}>SÖK</div>
          </form>
        </div>
      </div>
    );
   }
 }

class RestaurantList extends React.Component {
   render() {
     return (
       <ul>
         {this.props.list.map(function(restaurant, key){
           return <li key={key}>{restaurant.name}</li>;
         })}
       </ul>
     );
    }
  }

ReactDOM.render(
  <SearchBox />,
  document.getElementById('content')
);


//https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670,151.1957&radius=500&types=food&name=cruise&key=AIzaSyCuu4qJwbc6h_M_Tc-uQoORF5g4o-pmito
