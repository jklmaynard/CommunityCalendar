CommunityCalendar.Day = DS.Model.extend({
  dayName: DS.attr(),
  dayDate: DS.attr(),
  interests: DS.hasMany('interest', {async: true})
});
