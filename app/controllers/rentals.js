import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    filterByCity(param) {
      if (param !== '') {
        return this.get('store').query('rental', { city: param }).then((filteredResults) => {
          return { query: param, results: filteredResults };
        });
      } else {
        return this.get('store').findAll('rental').then((results) => {
          return { query: param, results: results };
        });
      }
    },

    deleteRecord(rental) {
      Ember.Logger.log('deleteRecord: start');
      this.get('store').unloadRecord(rental);
      Ember.Logger.log('deleteRecord: finish');
    }
  }
});
