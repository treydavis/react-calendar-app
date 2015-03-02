'use strict';

var React = require('react');
var DateHeader = require('./DateHeader');
var CalendarBody = require('./CalendarBody');

var App = React.createClass({
  render: function() {
    var header = React.createElement(DateHeader, {date: Date.now()});
    var body = React.createElement(CalendarBody, {date: Date.now(), events: {}});
    return React.createElement('div', null, [header, body]);
  }
});

module.exports = App;
