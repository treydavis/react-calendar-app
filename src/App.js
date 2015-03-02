'use strict';

var React = require('react');
var DateHeader = require('./DateHeader');

var App = React.createClass({
  render: function() {
    return React.createElement(DateHeader, {date: Date.now()});
  }
});

module.exports = App;
