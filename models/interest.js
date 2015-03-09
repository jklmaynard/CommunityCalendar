CommunityCalendar.Interest = DS.Model.extend({
  description: DS.attr(),
  time: DS.attr(),
  location: DS.attr(),
  website: DS.attr(),
  day: DS.belongsTo('day', {async: true})
});
