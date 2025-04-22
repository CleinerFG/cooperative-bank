import { translate } from '../../../global/js/i18n/Translator';

export const PASS_ERRORS = {
  must8CharsLong: translate('must8CharsLong'),
  mustLowercaseChar: translate('mustLowercaseChar'),
  mustUppercaseChar: translate('mustUppercaseChar'),
  mustNumber: translate('mustNumber'),
  mustSpecialChar: translate('mustSpecialChar'),
  canNotBlankSpace: translate('canNotBlankSpace'),
  canNotSeqPattern: (value) => translate('canNotSeqPattern')(value),
  canNotCharSeq: (value) => translate('canNotCharSeq')(value),
};
