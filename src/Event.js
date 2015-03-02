var React = require('react');

var Event = React.createClass({
  render: function() {
    var event = this.props.event;
    var dayStart = new Date(event.start);
    dayStart.setHours(0);
    var day = event.start.getDay();
    var collisionIndex = this.props.collisionIndex;
    var collisionLength = this.props.collisionLength;

    var bgStyle = {
      position: "absolute",
      top: 0, right: 0, bottom: 0, left: 0,
      backgroundColor: "#fff2bf",
      opacity: 0.6
    };
    var bg = React.createElement('div', {style: bgStyle});

    var titleStyle = {
      position: "absolute",
      top: 0, right: 0, bottom: 0, left: 0,
      overflow: "hidden",
      wordBreak: "break-word"
    };
    var title = React.createElement('div', {style: titleStyle}, event.title);

    var overlappedEventStyle = {
      position: "absolute",
      left: (collisionIndex/collisionLength*100).toString() + "%",
      right: ((1-(collisionIndex+1)/collisionLength)*100).toString() + "%",
      top: 0, bottom: 0
    };
    var overlapped = React.createElement('div', {style: overlappedEventStyle}, [bg, title]);

    var DAY_IN_MSEC = 86400000;
    
    var eventContainerStyle = {
      position: "absolute",
      top: ((event.start.getTime()-dayStart.getTime())/DAY_IN_MSEC*100).toString() + "%",
      bottom: (100-((event.end.getTime()-dayStart.getTime()))/DAY_IN_MSEC*100).toString() + "%",
      left: (100/7.0*day).toString() + "%",
      right: (100/7.0*(7-(day+1))).toString() + "%",
      overflow: "visible"
    };
    return React.createElement('div', {style: eventContainerStyle}, overlapped);
  }
});

module.exports = Event;
