CommunityCalendar.Router.map(function() {
  this.resource('home', {path: '/'});
  this.resource('new-day');
  this.resource('calendar');
  this.resource('day', {path: '/:day_id'}, function() {
    this.resource('new-interest')
    this.resource('interest', {path: '/:interest_id'})
  });
});
