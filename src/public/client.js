
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
    console.log("clicked " +  this.state.inputfield);
  /*  var arr = [];
    for (var i=0, t=20; i<t; i++) {
        arr.push(Math.round(Math.random() * t))
    }

    ReactDOM.render(

      <ProperListRender list={arr}  />,
      document.getElementById('searchresult')
    );
*/
$.getJSON('http://localhost:3000/searchGoogle?searchText=restaurant+'+  this.state.inputfield)
  .done(function(result) {
    var obj = JSON.parse(result.text);
        console.log(obj);
    ReactDOM.render(

      <ProperListRender list={obj.results}  />,
      document.getElementById('searchresult')
    );
});
}

  render() {
    return (
      <div className="searchBox">
        <div className="welcomeText">Enter your location:</div>
        <div className="searchWrapper">
          <form>
            <input type="text" placeholder="Enter location" onChange={this.handleChange} />
          <div className="submitButton" onClick={this.handleClick}>SEARCH</div>
          </form>
          </div>

      </div>
    );
   }
 }

class ProperListRender extends React.Component {
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
