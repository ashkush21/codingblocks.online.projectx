import { bool } from '@ember/object/computed';
import { computed } from '@ember/object';
import DS from 'ember-data';

export default DS.Model.extend({
  contentable: DS.attr(),
  title: DS.attr(),
  sectionContent: DS.attr(),
  course: DS.belongsTo('course'),
  qna: DS.belongsTo('qna'),
  lecture: DS.belongsTo('lecture'),
  "code-challenge": DS.belongsTo('code-challenge'),
  document: DS.belongsTo('document'),
  csv: DS.belongsTo('csv'),
  //attachment: DS.belongsTo('attachment'),
  video: DS.belongsTo('video'),
  duration: DS.attr(),
  payload: computed('contentable', 'qna', 'lecture', 'code-challenge', 'document', 'video', 'csv', function () {
    return this.get(this.contentable);
  }),
  isDone: bool('progress.isDone'),
  isActive: bool('progress.isActive'),
  isFeedbackDone: computed('progress.isFeedbackDone', function () {
    return !! this.get('progress.isFeedbackDone')
  }),
  iconClass: computed('contentable', function () {
    switch (this.contentable) {
      case 'document': return 'file-icon'; break;
      case 'code-challenge': return 'code-icon'; break;
      case 'lecture':
      default: return 'play-icon'; break;
    }
  }),
  progress: DS.belongsTo('progress')
  // section: DS.belongsTo('section')
})
