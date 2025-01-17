/* @web/test-runner snapshot v1 */
export const snapshots = {};

snapshots["Wizards for SCL element SampledValueControl define an edit wizard that looks like the latest snapshot"] = 
`<mwc-dialog
  defaultaction="close"
  heading="[wizard.title.edit]"
  open=""
  style="--mdc-dialog-min-width:calc(100% + 48px)"
>
  <nav>
    <mwc-icon-button icon="more_vert">
    </mwc-icon-button>
    <mwc-menu
      class="actions-menu"
      corner="BOTTOM_RIGHT"
      menucorner="END"
    >
      <mwc-list-item
        aria-disabled="false"
        graphic="icon"
        mwc-list-item=""
        role="menuitem"
        tabindex="0"
      >
        <span>
          [remove]
        </span>
        <mwc-icon slot="graphic">
          delete
        </mwc-icon>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        graphic="icon"
        mwc-list-item=""
        role="menuitem"
        tabindex="-1"
      >
        <span>
          [scl.DataSet]
        </span>
        <mwc-icon slot="graphic">
          edit
        </mwc-icon>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        graphic="icon"
        mwc-list-item=""
        role="menuitem"
        tabindex="-1"
      >
        <span>
          [scl.SmvOpts]
        </span>
        <mwc-icon slot="graphic">
          edit
        </mwc-icon>
      </mwc-list-item>
    </mwc-menu>
  </nav>
  <div id="wizard-content">
    <wizard-textfield
      dialoginitialfocus=""
      helper="[scl.name]"
      label="name"
      maxlength="32"
      pattern="[A-Za-z][0-9,A-Z,a-z_]*"
      required=""
      validationmessage="[textfield.required]"
    >
    </wizard-textfield>
    <wizard-textfield
      disabled=""
      helper="[scl.desc]"
      label="desc"
      nullable=""
      pattern="([ -~]|[]|[ -퟿]|[-�])*"
    >
    </wizard-textfield>
    <wizard-checkbox
      disabled=""
      helper="[scl.multicast]"
      label="multicast"
    >
    </wizard-checkbox>
    <wizard-textfield
      helper="[scl.id]"
      label="smvID"
      required=""
      validationmessage="[textfield.nonempty]"
    >
    </wizard-textfield>
    <wizard-select
      disabled=""
      helper="[scl.smpMod]"
      label="smpMod"
      nullable=""
      required=""
    >
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="SmpPerPeriod"
      >
        SmpPerPeriod
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="SmpPerSec"
      >
        SmpPerSec
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="SecPerSmp"
      >
        SecPerSmp
      </mwc-list-item>
    </wizard-select>
    <wizard-textfield
      helper="[scl.smpRate]"
      label="smpRate"
      min="0"
      required=""
      type="number"
    >
    </wizard-textfield>
    <wizard-textfield
      helper="[scl.nofASDU]"
      label="nofASDU"
      min="0"
      required=""
      type="number"
    >
    </wizard-textfield>
    <wizard-select
      disabled=""
      helper="[scl.securityEnable]"
      label="securityEnable"
      nullable=""
      required=""
    >
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="None"
      >
        None
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="Signature"
      >
        Signature
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        role="option"
        tabindex="-1"
        value="SignatureAndEncryption"
      >
        SignatureAndEncryption
      </mwc-list-item>
    </wizard-select>
  </div>
  <mwc-button
    dialogaction="close"
    label="[cancel]"
    slot="secondaryAction"
    style="--mdc-theme-primary: var(--mdc-theme-error)"
  >
  </mwc-button>
  <mwc-button
    icon="save"
    label="[save]"
    slot="primaryAction"
    trailingicon=""
  >
  </mwc-button>
</mwc-dialog>
`;
/* end snapshot Wizards for SCL element SampledValueControl define an edit wizard that looks like the latest snapshot */

snapshots["Wizards for SCL element SampledValueControl define a select wizard that looks like the latest snapshot"] = 
`<mwc-dialog
  defaultaction="close"
  heading="[wizard.title.select]"
  open=""
  style="--mdc-dialog-min-width:calc(100% + 0px)"
>
  <div id="wizard-content">
    <filtered-list>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        tabindex="0"
        twoline=""
        value="IED2>>CBSW>MSVCB01"
      >
        <span>
          MSVCB01
        </span>
        <span slot="secondary">
          IED2>>CBSW>MSVCB01
        </span>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        mwc-list-item=""
        tabindex="-1"
        twoline=""
        value="IED3>>MU01>MSVCB01"
      >
        <span>
          MSVCB01
        </span>
        <span slot="secondary">
          IED3>>MU01>MSVCB01
        </span>
      </mwc-list-item>
    </filtered-list>
  </div>
  <mwc-button
    dialogaction="close"
    label="[cancel]"
    slot="secondaryAction"
    style="--mdc-theme-primary: var(--mdc-theme-error)"
  >
  </mwc-button>
</mwc-dialog>
`;
/* end snapshot Wizards for SCL element SampledValueControl define a select wizard that looks like the latest snapshot */

