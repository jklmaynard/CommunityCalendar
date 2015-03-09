CommunityCalendar.DayController = Ember.ObjectController.extend({
    actions: {
      delete: function() {
        if (confirm('Woah. You wanna do that?')) {
          this.get('model').destroyRecord();
        };
        this.transitionToRoute('calendar')
      }
    }
});
