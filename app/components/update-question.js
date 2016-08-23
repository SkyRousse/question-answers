import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    showQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    questionFormHide() {
      this.set('updateQuestionForm', false);
    },
    update(question) {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        date: new Date().toLocaleDateString(),
        additionalNotes: this.get('additionalNotes'),
        tag: this.get('tag'),
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    }
  }
});
