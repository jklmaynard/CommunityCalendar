CommunityCalendar.NewDayController = Ember.Controller.extend({
  actions: {
      save: function() {
        var newDay = this.store.createRecord('day', {
          dayName: this.get('dayName'),
          dayDate: this.get('dayDate')
        });

        newDay.save();
        this.transitionToRoute('calendar');
    }
  }
});
