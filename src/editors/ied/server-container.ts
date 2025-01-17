import {
  css,
  customElement,
  html,
  LitElement,
  property,
  TemplateResult,
} from 'lit-element';
import { nothing } from "lit-html";

import '../../action-pane.js';
import './ldevice-container.js';

import { Nsdoc } from '../../foundation/nsdoc.js';
import { serverIcon } from '../../icons/ied-icons.js';
import { getDescriptionAttribute } from "../../foundation.js";

/** [[`IED`]] plugin subeditor for editing `Server` element. */
@customElement('server-container')
export class ServerContainer extends LitElement {
  @property({ attribute: false })
  element!: Element;

  @property()
  ancestors: Element[] = [];

  @property()
  nsdoc!: Nsdoc;

  private header(): TemplateResult {
    const desc = getDescriptionAttribute(this.element);

    return html`Server${desc ? html` &mdash; ${desc}` : nothing}`;
  }

  render(): TemplateResult {
    return html`<action-pane .label="${this.header()}">
      <mwc-icon slot="icon">${serverIcon}</mwc-icon>
      ${Array.from(this.element.querySelectorAll(':scope > LDevice')).map(server =>
        html`<ldevice-container
          .element=${server}
          .nsdoc=${this.nsdoc}
          .ancestors=${[this.element, ...this.ancestors]}
        ></ldevice-container>`)}
    </action-pane>`;
  }

  static styles = css``;
}
