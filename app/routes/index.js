import Route from "ember-routing/route";
import Ember from 'ember';

export default Route.extend({
  beforeModel() {
    this._super(...arguments);
    this.replaceWith('rentals');
  }
});
