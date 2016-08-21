import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer() {
      var params = {
        content: this.get('content') ? this.get('content'): "",
        author: this.get('author') ? this.get('author'): "",
        date: new Date().toLocaleDateString(),
        rank: 0,
      };
      this.sendAction('saveAnswer', params);
    },
  }
});
