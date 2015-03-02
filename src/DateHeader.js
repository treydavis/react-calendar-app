var React = require('react');

var DateHeader = React.createClass({
  render: function() {
    var weekIncrement = new Date();
    weekIncrement.setDate(weekIncrement.getDate() - weekIncrement.getDay());

    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var headerItems = [];
    
    for (var d=0; d<7; d++) {
      var dayStyle = {};
      var day = React.createElement('span', {style: dayStyle}, days[d]);

      var dateContainerStyle = {
        paddingTop: 20
      };
      var dateContainer = React.createElement('div', {style: dateContainerStyle}, day);
      
      var dateHeaderItemStyle = {
        position: "absolute",
        left: (100/7.0*d).toString() + "%",
        right: (100/7.0*(7-(d+1))).toString() + "%"
      };      
      headerItems.push(React.createElement('div', {style: dateHeaderItemStyle}, dateContainer));
      
      weekIncrement.setDate(weekIncrement.getDate() + 1);
    }

    var dateHeaderStyle = {
      position: "absolute",
      top: 0, right: 0, left: 50,
      height: 50,
      borderBottom: "1px solid black"
    };
    return React.createElement('div', {style: dateHeaderStyle}, headerItems);
  }
});

module.exports = DateHeader;
