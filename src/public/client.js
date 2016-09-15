class InfoBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResult: []
    };

    this.getTwitterData();
  }

  getTwitterData() {
    $.get('http://localhost:3000/searchTwitter?searchText=' +  this.props.name)
      .done((result) => {
        var obj = result;
        this.setState({
          searchResult: obj.statuses
        });
    });
  }

  render() {
    return (
      <div className="tweetContainer">
        <ul>
          {this.state.searchResult.map((tweet, key) => {
            return <li className="tweetItem" key={key}>{tweet.text}</li>
          })}
        </ul>
      </div>
    );
  }
}

class ListItem extends React.Component {
  constructor(props) {
    super(props);

    this.showInfo = false;

    this.toggleInfo = this.toggleInfo.bind(this);
  }

  toggleInfo() {
    console.log('List item clicked!');
    this.showInfo = !this.showInfo;
    this.forceUpdate();
  }

  render() {
    let info = ''
    if (this.showInfo) {
      info = <InfoBox name={this.props.restaurant.name} />
    }

    return (
      <div className="listItem" onClick={this.toggleInfo}>
        {this.props.restaurant.name}
        <div>
          {info}
        </div>
      </div>
    );
  }
}

class RestaurantList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.list.map((restaurant, key) => {
          return <li key={key}><ListItem restaurant={restaurant} /></li>
        })}
     </ul>
    );
  }
}

class SearchBox extends React.Component {
  constructor() {
    super();
    this.state = {
        inputfield: '',
        searchResult: []
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      inputfield: event.target.value,
      searchResult: this.state.searchResult
    });
  }

  handleClick() {
    console.log("clicked " +  this.state.inputfield);
    $.getJSON('http://localhost:3000/searchGoogle?searchText=restaurant+'+  this.state.inputfield)
      .done((result) => {
        var obj = JSON.parse(result.text);
        this.setState({
          inputfield: '',
          searchResult: obj.results
        });
        console.log(obj);
      });
  }

  render() {
    return (
      <div className="searchBox">
        <div className="welcomeText">Sök på stad</div>
        <div className="searchWrapper row">
          <form>
            <input type="text" placeholder="Skriv in stad" onChange={this.handleChange}/>
            <div className="btn btn-block btn-lg btn-primary demobtn" onClick={this.handleClick}>SÖK</div>
          </form>
        </div>
        <RestaurantList list={this.state.searchResult}  />
      </div>
    );
   }
 }

ReactDOM.render(
  <SearchBox />,
  document.getElementById('content')
);
