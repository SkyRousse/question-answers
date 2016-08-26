import Ember from 'ember';

export default Ember.Component.extend({
  favorites: Ember.inject.service(),

  actions: {
    removeFromFavorites(item){
      this.get('favorites').remove(item);
    }
  }
});
