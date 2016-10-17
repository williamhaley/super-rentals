import { inject as service } from "ember-service";
import Component from "ember-component";
import Ember from 'ember';

export default Component.extend({
  maps: service(),

  didInsertElement() {
    this._super(...arguments);
    let location = this.get('location');
    let mapElement = this.get('maps').getMapElement(location);
    this.$('.map-container').append(mapElement);
  }
});
