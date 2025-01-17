import { fixture, html, expect } from '@open-wc/testing';

import '../../../../src/editors/substation/function-editor.js';
import { FunctionEditor } from '../../../../src/editors/substation/function-editor.js';

describe('web component rendering Function element', () => {
  let element: FunctionEditor;
  let doc: XMLDocument;

  beforeEach(async () => {
    doc = await fetch('/test/testfiles/zeroline/functions.scd')
      .then(response => response.text())
      .then(str => new DOMParser().parseFromString(str, 'application/xml'));
  });

  describe('with complete attribute set and existing children', () => {
    beforeEach(async () => {
      element = <FunctionEditor>(
        await fixture(
          html`<function-editor
            .element=${doc.querySelector('Function')}
          ></function-editor>`
        )
      );
    });

    it('looks like the latest snapshot', async () => {
      await expect(element).shadowDom.to.equalSnapshot();
    });
  });

  describe('with missing desc and type attribute', () => {
    beforeEach(async () => {
      element = <FunctionEditor>(
        await fixture(
          html`<function-editor
            .element=${doc.querySelector('VoltageLevel Function')}
          ></function-editor>`
        )
      );
    });

    it('looks like the latest snapshot', async () => {
      await expect(element).shadowDom.to.equalSnapshot();
    });
  });
});
