import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },
  actions: {
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },
    upVote(question) {
      debugger;
      var voteScore = question.get("vote");
      question.set("vote", (voteScore += 1));
      question.save();
    },
  }
});
