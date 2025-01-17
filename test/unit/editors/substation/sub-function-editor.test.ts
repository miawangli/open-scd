import { fixture, html, expect } from '@open-wc/testing';

import '../../../../src/editors/substation/sub-function-editor.js';
import { SubFunctionEditor } from '../../../../src/editors/substation/sub-function-editor.js';

describe('web component rendering SubFunction element', () => {
  let element: SubFunctionEditor;
  let doc: XMLDocument;

  beforeEach(async () => {
    doc = await fetch('/test/testfiles/zeroline/functions.scd')
      .then(response => response.text())
      .then(str => new DOMParser().parseFromString(str, 'application/xml'));
  });

  describe('with complete attribute set and existing children', () => {
    beforeEach(async () => {
      element = <SubFunctionEditor>(
        await fixture(
          html`<sub-function-editor
            .element=${doc.querySelector('VoltageLevel SubFunction')}
          ></sub-function-editor>`
        )
      );
    });

    it('looks like the latest snapshot', async () => {
      await expect(element).shadowDom.to.equalSnapshot();
    });
  });

  describe('with missing desc and type attribute', () => {
    beforeEach(async () => {
      element = <SubFunctionEditor>(
        await fixture(
          html`<sub-function-editor
            .element=${doc.querySelector('SubFunction')}
          ></sub-function-editor>`
        )
      );
    });

    it('looks like the latest snapshot', async () => {
      await expect(element).shadowDom.to.equalSnapshot();
    });
  });
});
