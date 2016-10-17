import Component from "ember-component";
import Ember from 'ember';

export default Component.extend({
  isWide: false,
  actions: {
    toggleImageSize() {
      this.toggleProperty('isWide');
    }
  }
});
