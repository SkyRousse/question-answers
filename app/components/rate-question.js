import Ember from 'ember';

export default Ember.Component.extend({
  voteCount: Ember.computed('question.vote', function() {
    return this.get('question.vote') * -1;
  }),
  actions: {
    upVote(question) {
    this.sendAction("upVote", question);
    }
  }
});
