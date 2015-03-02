var React = require('react');

var Events = React.createClass({
  eventsToEventGroups: function(sourceEvents) {
    var eventGroups = [];
    var events = sourceEvents.slice(0);
    events.sort(function(a, b) {
      return a.start.getTime() > b.start.getTime() ? 1 : -1;
    });
    
    var getCollidingGroup = function(event) {
      for (var eg in eventGroups) {
        var eventGroup = eventGroups[eg];
        if (event.start.getTime() <= eventGroup.end.getTime() &&
            eventGroup.start.getTime() <= event.end.getTime()) {
          return eventGroup;
        }
      }
      return undefined;
    };
    
    for (var e in events) {
      var event = events[e];
      var collidingGroup = getCollidingGroup(event);
      if (collidingGroup) {
        collidingGroup.events.push(event);
        collidingGroup.start = new Date(Math.min(event.start.getTime(), collidingGroup.start.getTime()));
        collidingGroup.end = new Date(Math.max(event.end.getTime(), collidingGroup.end.getTime()));
      } else {
        eventGroups.push({
          start: event.start,
          end: event.end,
          events: [event]
        });
      }
    }
    return eventGroups;
  },
  render: function() {
    var eventGroups = this.eventsToEventGroups(this.props.events);
    //loop over event groups
    //for each event in event group, add an event
    var eventElements = [];
    for (var eg in eventGroups) {
      var eventGroup = eventGroups[eg];
      for (var e=0; e<eventGroup.events.length; e++) {
        var event = eventGroup.events[e];
        var dayStart = new Date(event.start);
        dayStart.setHours(0);
        var day = event.start.getDay();

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
          left: (e/eventGroup.events.length*100).toString() + "%",
          right: ((1-(e+1)/eventGroup.events.length)*100).toString() + "%",
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
        eventElements.push(React.createElement('div', {style: eventContainerStyle}, overlapped));
      }
    }
    
    var frameStyle = {
      position: "absolute",
      top: 0, right: 0, bottom: 0, left: 50
    };
    var frame = React.createElement('div', {style: frameStyle}, eventElements);
    return frame;
  }
});

module.exports = Events;
