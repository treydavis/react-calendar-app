var React = require('react');
var Grid = require('./Grid');
var Events = require('./Events');

var CalendarBody = React.createClass({
  render: function() {
    function randomDate() {
      var start = new Date();
      start.setDate(start.getDate() - start.getDay());
      var end = new Date();
      end.setDate(end.getDate() + (6-end.getDay()));
      return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }
    var e = [];
    for (var i=0; i<5; i++) {
      e.push({time: randomDate(), duration: 3, title: "An event title"});
    }
    console.log(e);
      
    var grid = React.createElement(Events, {events: e});
    var events = React.createElement(Grid);

    var contentStyle = {
      position: "absolute",
      top: 0, right: 0, bottom: 0, left: 0,
      height: 1200
    };
    var content = React.createElement('div', {style: contentStyle}, [grid, events]);

    var scrollableStyle = {
      position: "absolute",
      top: 0, right: 0, bottom: 0, left: 0,
      overflowY: "scroll"
    };
    var scrollable = React.createElement('div', {style: scrollableStyle}, content);

    var frameStyle = {
      position: "absolute",
      top: 50, right: 0, bottom: 0, left: 0
    };
    var frame = React.createElement('div', {style: frameStyle}, scrollable);
    return frame;
  }
});

module.exports = CalendarBody;
