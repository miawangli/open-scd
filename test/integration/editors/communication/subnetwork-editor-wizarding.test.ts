import { fixture, html, expect } from '@open-wc/testing';
import fc from 'fast-check';

import '../../../mock-wizard.js';
import { MockWizard } from '../../../mock-wizard.js';

import { ListItemBase } from '@material/mwc-list/mwc-list-item-base';

import '../../../../src/editors/communication/subnetwork-editor.js';
import { regexString, regExp, inverseRegExp } from '../../../foundation.js';

describe('subnetwork-editor wizarding integration', () => {
  describe('edit/add Subnetwork wizard', () => {
    let doc: XMLDocument;
    let parent: MockWizard;

    beforeEach(async () => {
      doc = await fetch('/test/testfiles/valid2007B4.scd')
        .then(response => response.text())
        .then(str => new DOMParser().parseFromString(str, 'application/xml'));
      parent = <MockWizard>(
        await fixture(
          html`<mock-wizard
            ><subnetwork-editor
              .element=${doc.querySelector('SubNetwork')}
            ></subnetwork-editor
          ></mock-wizard>`
        )
      );

      (<HTMLElement>(
        parent
          ?.querySelector('subnetwork-editor')
          ?.shadowRoot?.querySelector('mwc-icon-button[icon="edit"]')
      )).click();
      await parent.updateComplete;
    });
    it('looks like the latest snapshot', async () => {
      await expect(parent.wizardUI.dialog).to.equalSnapshot();
    });
    describe('the first input element', () => {
      it('edits the attribute name', async () => {
        expect(parent.wizardUI.inputs[0].label).to.equal('name');
      });
      it('edits only for valid inputs', async () => {
        await fc.assert(
          fc.asyncProperty(regexString(regExp.tName, 1), async name => {
            parent.wizardUI.inputs[0].value = name;
            await parent.updateComplete;
            expect(parent.wizardUI.inputs[0].checkValidity()).to.be.true;
          })
        );
      });
    });
    describe('the second input element', () => {
      it('edits the attribute desc', async () => {
        expect(parent.wizardUI.inputs[1].label).to.equal('desc');
      });
      it('edits only for valid inputs', async () => {
        await fc.assert(
          fc.asyncProperty(regexString(regExp.desc), async desc => {
            parent.wizardUI.inputs[1].value = desc;
            await parent.updateComplete;
            expect(parent.wizardUI.inputs[1].checkValidity()).to.be.true;
          })
        );
      });
    });
    describe('the third input element', () => {
      it('edits the attribute type', async () => {
        expect(parent.wizardUI.inputs[2].label).to.equal('type');
      });
      it('edits only for valid inputs', async () => {
        await fc.assert(
          fc.asyncProperty(regexString(regExp.desc, 1), async type => {
            parent.wizardUI.inputs[2].value = type;
            await parent.updateComplete;
            expect(parent.wizardUI.inputs[2].checkValidity()).to.be.true;
          })
        );
      });
    });
    describe('the fourth input element', () => {
      it('edits the attribute ', async () => {
        expect(parent.wizardUI.inputs[3].label).to.equal('BitRate');
      });
      it('edits only for valid inputs', async () => {
        await fc.assert(
          fc.asyncProperty(regexString(regExp.decimal), async BitRate => {
            parent.wizardUI.inputs[3].value = BitRate;
            await parent.updateComplete;
            expect(parent.wizardUI.inputs[3].checkValidity()).to.be.true;
          })
        );
      });
      it('rejects edition for invalid inputs', async () => {
        await fc.assert(
          fc.asyncProperty(
            regexString(inverseRegExp.decimal, 1),
            async BitRate => {
              parent.wizardUI.inputs[3].value = BitRate;
              await parent.updateComplete;
              expect(parent.wizardUI.inputs[3].checkValidity()).to.be.false;
            }
          )
        );
      });
    });
  });
});
