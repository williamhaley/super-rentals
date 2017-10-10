import Ember from 'ember';

export default Ember.Component.extend({
  isWide: false,
  actions: {
    toggleImageSize() {
      this.toggleProperty('isWide');
    },

    onDelete(rental) {
      this.get('deleteRecord')(rental);
    }
  }
});
