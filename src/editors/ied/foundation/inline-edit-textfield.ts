import {
  customElement,
  html,
  property,
  TemplateResult,
} from 'lit-element';

import '@material/mwc-icon-button';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-menu';
import '@material/mwc-icon-button-toggle';
import { TextField } from '@material/mwc-textfield';
import { CustomDAIValidation } from './foundation.js';
import { get } from 'lit-translate';

@customElement('inline-edit-textfield')
export class InlineEditTextField extends TextField {

  @property()
  validation: CustomDAIValidation | undefined;

  constructor() {
    super();
    this.disabled = true;
  }

  checkValidity(): boolean {
    this.setCustomValidity(this.validation?.validationMessage ?? get('ied.dai.defaultvalidationmessage'));
    return super.checkValidity();
  }

  renderEditSwitch(): TemplateResult {
    return html`<mwc-icon-button-toggle
        style="margin-left: 12px;"
        onIcon="clear"
        offIcon="edit"
        @click=${() => this.handleEditSwitch()}
      ></mwc-icon-button-toggle>`;
  }

  private handleEditSwitch() {
    this.disabled = !this.disabled;
  }

  render(): TemplateResult {
    return html`
      <div style="display: flex; flex-direction: row;">
        <div style="flex: auto;">${super.render()}</div>
        ${this.validation 
          ? html`<div style="display: flex; align-items: center; height: 56px;">
              ${this.renderEditSwitch()}
            </div>`
          : html``
        }
      </div>
    `;
  }
}
