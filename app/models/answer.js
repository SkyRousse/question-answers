import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr(),
  author: DS.attr(),
  date: DS.attr(),
  rank: DS.attr(),
  question: DS.belongsTo('question', { async: true })
});
