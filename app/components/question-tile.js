import Ember from 'ember';

export default Ember.Component.extend({
  
  sortBy: ['vote:asc'],
  sortedQuestions: Ember.computed.sort('questions', 'sortBy'),

  actions: {
    upVote(answer) {
      debugger;
      this.sendAction("upVote", answer);
    }
  }
});
