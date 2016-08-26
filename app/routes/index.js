import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query('question', {
      orderBy: 'vote'
    });
  },
  actions: {
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },
    upVote(question) {
      var voteScore = question.get("vote");
      question.set("vote", (voteScore -= 1));
      question.save();
      this.refresh();
    },
    sendToFavorites() {
      this.transitionTo('favorites');
    }
  }
});
