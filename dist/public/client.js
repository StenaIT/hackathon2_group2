"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchBox = function (_React$Component) {
  _inherits(SearchBox, _React$Component);

  function SearchBox() {
    _classCallCheck(this, SearchBox);

    var _this = _possibleConstructorReturn(this, (SearchBox.__proto__ || Object.getPrototypeOf(SearchBox)).call(this));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(SearchBox, [{
    key: "handleClick",
    value: function handleClick() {
      console.log("clicked search");
      /*  $.get( "  https://maps.googleapis.com/maps/api/place/textsearch/xml?query=restaurants+in+Sydney&key=AIzaSyCuu4qJwbc6h_M_Tc-uQoORF5g4o-pmito" )
        .done(function( data ) {
        console.log(data );
      });
      */
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "searchBox" },
        React.createElement(
          "div",
          { className: "welcomeText" },
          "Enter your location:"
        ),
        React.createElement(
          "div",
          { className: "searchWrapper" },
          React.createElement(
            "form",
            null,
            React.createElement("input", { type: "text", placeholder: "Enter location" }),
            React.createElement(
              "div",
              { className: "submitButton", onClick: this.handleClick },
              "SEARCH"
            )
          )
        )
      );
    }
  }]);

  return SearchBox;
}(React.Component);

ReactDOM.render(React.createElement(SearchBox, null), document.getElementById('content'));

//https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670,151.1957&radius=500&types=food&name=cruise&key=AIzaSyCuu4qJwbc6h_M_Tc-uQoORF5g4o-pmito