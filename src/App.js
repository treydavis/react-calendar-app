'use strict';

var React = require('react');
var DateHeader = require('./DateHeader');
var CalendarBody = require('./CalendarBody');

var App = React.createClass({
  getInitialState: function() {
    return {events:[]};
  },
  
  handleClick: function() {
    function randomDateInCurrentWeek() {
      var start = new Date();
      start.setDate(start.getDate() - start.getDay());
      var end = new Date();
      end.setDate(end.getDate() + (6-end.getDay()));
      return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }
    
    var start = randomDateInCurrentWeek();
    var end = new Date(start);
    end.setHours(start.getHours()+3);
    var event = {start: start, end: end, title: "Boston Orioles @ Detroit Tigers"};
    
    this.setState({events: this.state.events.concat([event])});
  },
  
  render: function() {
    var button = React.createElement('button', {onClick: this.handleClick}, "+");
    var header = React.createElement(DateHeader, {date: Date.now()});
    var body = React.createElement(CalendarBody, {date: Date.now(), events: this.state.events});
    return React.createElement('div', null, [button, header, body]);
  }
});

module.exports = App;
