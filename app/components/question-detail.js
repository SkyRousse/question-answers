import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(question, params) {
      debugger;
      this.sendAction('update', question, params);
    },
    upVote(answer) {
      debugger;
      this.sendAction("upVote", answer);
    }
  }
});
