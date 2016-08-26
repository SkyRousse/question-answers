import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(question, params) {
      this.sendAction('update', question, params);
    },
    upVote(answer) {
      this.sendAction("upVote", answer);
    }
  }
});
