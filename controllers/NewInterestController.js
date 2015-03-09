CommunityCalendar.NewInterestController = Ember.ObjectController.extend({
  actions: {
    add: function() {
      var interest = this.get('model');
      interest.save();

      var controller = this;
      interest.get('day').then(function(day) {
        day.save();
        controller.transitionToRoute('day', day);
      });
    },
    cancel: function() {
      this.transitionToRoute('day')
    }
  }
});
