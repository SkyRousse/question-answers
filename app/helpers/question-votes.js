import Ember from 'ember';

export function questionVotes(params/*, hash*/) {
  var question = params[0];

  if(question.get('answers').get('length') <= 0) {
    return Ember.String.htmlSafe('<i class="fa fa-check" aria-hidden="true"></i> answer')
  } else {
    return Ember.String.htmlSafe('<span class="no-answer">x</span>')
  }
}

export default Ember.Helper.helper(questionVotes);
