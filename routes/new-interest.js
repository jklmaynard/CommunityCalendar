CommunityCalendar.NewInterestRoute = Ember.Route.extend({
  model: function(params) {
    var day = this.modelFor('day');
    var interest = this.store.createRecord('interest');
    day.get('interests').then(function(interests) {
      interests.pushObject(interest);
    })
    return interest;
  }
});
