import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';

export default helper(function emberCliDfinity() {
  return htmlSafe ('<a href="https://github.com/onehilltech/ember-cli-dfinity" target="_blank">ember-cli-dfinity</a>');
});
