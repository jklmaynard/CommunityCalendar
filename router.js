CommunityCalendar.Router.map(function() {
  this.resource('new-day');
  this.resource('calendar', {path: '/'});
  this.resource('day', {path: '/:day_id'}, function() {
    this.resource('new-interest')
    this.resource('interest', {path: '/:interest_id'})
  });
});
