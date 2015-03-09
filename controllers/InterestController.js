CommunityCalendar.InterestController = Ember.ObjectController.extend({
  actions: {
    delete: function() {
      if (confirm("Sure about this?")) {
        this.get('model').destroyRecord();
      }
      this.transitionToRoute('day')
    }
  }
});
