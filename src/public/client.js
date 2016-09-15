
class SearchBox extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log("clicked");
  /*  var arr = [];
    for (var i=0, t=20; i<t; i++) {
        arr.push(Math.round(Math.random() * t))
    }

    ReactDOM.render(

      <ProperListRender list={arr}  />,
      document.getElementById('searchresult')
    );
*/
$.get('http://codepen.io/jobs.json')
  .done(function(result) {
    console.log(result);
    ReactDOM.render(

      <ProperListRender list={result.jobs}  />,
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
            <input type="text" placeholder="Enter location" />
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
         {this.props.list.map(function(job, key){
           return <li key={key}>{job.company_name}</li>;
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
