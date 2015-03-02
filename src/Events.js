var React = require('react');
var Event = require('./Event');

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
    
    var eventElements = [];
    for (var eg in eventGroups) {
      var eventGroup = eventGroups[eg];
      for (var e=0; e<eventGroup.events.length; e++) {        
        eventElements.push(React.createElement(Event, {
          event: eventGroup.events[e],
          collisionIndex: e,
          collisionLength: eventGroup.events.length
        }));
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
