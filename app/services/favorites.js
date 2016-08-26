import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  add(item) {
    debugger;
    this.get('items').pushObject(item);
  },

  remove(item) {
    this.get('items').removeObject(item);
  }

});
