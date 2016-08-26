import Ember from 'ember';

export default Ember.Component.extend({
  favorites: Ember.inject.service(),

  sortBy: ['vote:asc'],
  sortedQuestions: Ember.computed.sort('questions', 'sortBy'),

  actions: {
    upVote(answer) {
      this.sendAction("upVote", answer);
    },
    addToFavorites(item) {
      debugger;
      this.get('favorites').add(item);
      this.sendAction('sendToFavorites');
    }
  }
});
