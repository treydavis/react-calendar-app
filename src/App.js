'use strict';

var React = require('react');

var App = React.createClass({
  render: function() {
    var dateStyle = {
      fontSize: 17,
      fontWeight: "bold"
    };
    var date = React.createElement('span', {style: dateStyle}, '22');
    var day = React.createElement('span', null, 'Sun');

    var dateContainerStyle = {};
    var dateContainer = React.createElement('div', {style: dateContainerStyle}, [date, day]);

    var dateHeaderStyle = {
      position: "absolute",
      left: (100/7.0*2).toString() + "%",
      right: (100/7.0*(7-3)).toString() + "%"
    };
    var dateHeader = React.createElement('div', {style: dateHeaderStyle}, dateContainer);
    return dateHeader;
  }
});

module.exports = App;
