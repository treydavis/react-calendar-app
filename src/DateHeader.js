var React = require('react');

var DateHeader = React.createClass({
  render: function() {
    var dateStyle = {
      fontSize: 17,
      fontWeight: "bold"
    };
    var date = React.createElement('span', {style: dateStyle}, '22');
    var day = React.createElement('span', null, 'Sun');

    var dateContainerStyle = {};
    var dateContainer = React.createElement('div', {style: dateContainerStyle}, [date, day]);

    var headerItems = [];
    
    for (var d=0; d<7; d++) {
      var dateHeaderItemStyle = {
        position: "absolute",
        left: (100/7.0*d).toString() + "%",
        right: (100/7.0*(7-(d+1))).toString() + "%"
      };
      headerItems.push(React.createElement('div', {style: dateHeaderItemStyle}, dateContainer));      
    }

    var dateHeaderStyle = {
      top: 0, right: 0, left: 0,
      height: 50
    };
    return React.createElement('span', {style: dateHeaderStyle}, headerItems);
  }
});

module.exports = DateHeader;
