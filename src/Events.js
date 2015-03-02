var React = require('react');

var Events = React.createClass({
  render: function() {
    var eventElements = this.props.events.map(function(event) {
      var hours = event.time.getHours();
      var day = event.time.getDay();
      var duration = event.duration;
      var dayContainerStyle = {
        position: "absolute",
        top: (hours/24.0*100).toString() + "%",
        bottom: (100-(hours+duration)/24.0*100).toString() + "%",
        left: (100/7.0*day).toString() + "%",
        right: (100/7.0*(7-(day+1))).toString() + "%",
        lineHeight: 14,
        overflow: "visible",
        backgroundColor: "yellow"
      };
      return React.createElement('div', {style: dayContainerStyle}, event.title);
    });
    
    var frameStyle = {
      position: "absolute",
      top: 0, right: 0, bottom: 0, left: 50
    };
    var frame = React.createElement('div', {style: frameStyle}, eventElements);
    return frame;
  }
});

module.exports = Events;
