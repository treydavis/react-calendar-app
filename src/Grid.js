var React = require('react');

var Grid = React.createClass({
  render: function() {
    // for every half-hour
    var gridElements = [];
    for (var h=0; h<48; h++) {
      var lineStyle = {
        position: "absolute",
        borderTop: "1px dotted #e5e5e5",
        left: 0,
        right: 0,
        height: 1,
        top: (h/48.0*100).toString() + "%"
      };
      if (h % 2 == 0) {
        lineStyle.borderTop = "1px solid #e5e5e5";
      }
      gridElements.push(React.createElement('div', {style: lineStyle}));
    }

    var calendarBodyStyle = {
      position: "absolute",
      top: 0, right: 0, bottom: 0, left: 0
    };
    return React.createElement('div', {style: calendarBodyStyle}, gridElements);
  }
});

module.exports = Grid;
