var React = require('react');

var Grid = React.createClass({
  render: function() {
    // for every half-hour
    var gridElements = [];
    for (var hour=0; hour<24; hour+=0.5) {
      //half hour lines
      var lineStyle = {
        position: "absolute",
        borderTop: "1px dotted #e5e5e5",
        left: 50,
        right: 0,
        height: 1,
        top: (hour/24.0*100).toString() + "%"
      };
      //on the hour lines
      if (hour % 1 == 0) {        
        lineStyle.borderTop = "1px solid #e5e5e5"; //thicker
        //hour label
        var hourLabelStyle = {
          position: "absolute",
          color: "#666",
          left: 0,
          textAlign: "right",
          marginTop: -7,
          backgroundColor: "#fff",
          top: (hour/24.0*100).toString() + "%",
          width: 50
        };
        var hourString = hour < 12 ? (hour+1).toString() : (hour-11).toString();
        gridElements.push(React.createElement('div', {style: hourLabelStyle}, hourString));
      }
      
      gridElements.push(React.createElement('div', {style: lineStyle}));
    }

    var frameStyle = {
      position: "absolute",
      top: 0, right: 0, bottom: 0, left: 0
    };
    return React.createElement('div', {style: frameStyle}, gridElements);
  }
});

module.exports = Grid;
