var React = require('react');
var Grid = require('./Grid');

var CalendarBody = React.createClass({
  render: function() {
    var calendarBodyStyle = {
      position: "absolute",
      top: 50, right: 0, bottom: 0, left: 0,
      height: 1200
    };
    var grid = React.createElement(Grid);
    return React.createElement('div', {style: calendarBodyStyle}, grid);
  }
});

module.exports = CalendarBody;
