import Route from "ember-routing/route";
import Ember from 'ember';

export default Route.extend({
  model(params) {
    return this.get('store').findRecord('rental', params.rental_id);
  }
});
