import { SimpleTextEditor, CheckboxEditor } from 'common/editors';
import ContainerEditorWrapper from './ContainerEditorWrapper';
import NumberEditor from './NumberEditor';

const Editors = {
  AutoComplete: require('./AutoCompleteEditor'),
  DropDownEditor: require('./DropDownEditor'),
  ContainerEditorWrapper,
  SimpleTextEditor,
  CheckboxEditor,
  NumberEditor,
};

module.exports = Editors;
