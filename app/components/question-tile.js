import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    upVote(answer) {
      debugger;
      this.sendAction("upVote", answer);
    }
  }
});
