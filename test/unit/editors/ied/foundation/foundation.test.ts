import { html, fixture, expect } from '@open-wc/testing';

import { DaiValidationTypes, getCustomField } from '../../../../../src/editors/ied/foundation/foundation.js';

describe('foundation', async () => {
  let validSCL: XMLDocument;

  beforeEach(async () => {
    validSCL = await fetch('/test/testfiles/valid2007B4ForDAIValidation.scd')
      .then(response => response.text())
      .then(str => new DOMParser().parseFromString(str, 'application/xml'));
  });

  describe('getCustomField', () => {
    it('renders a INT8 field correctly', async () => {
      const dai = validSCL.querySelector('DAI[name="int8test"]');
      const element = await fixture(html`${getCustomField()[<DaiValidationTypes>'INT8']?.render(dai!)}`);

      expect(element).shadowDom.to.equalSnapshot();
      expect(element.shadowRoot?.querySelector('input')?.value).to.eql('5');
    });

    it('renders a INT16 field correctly', async () => {
      const dai = validSCL.querySelector('DAI[name="int16test"]');
      const element = await fixture(html`${getCustomField()[<DaiValidationTypes>'INT16']?.render(dai!)}`);

      expect(element).shadowDom.to.equalSnapshot();
      expect(element.shadowRoot?.querySelector('input')?.value).to.eql('500');
    });

    it('renders a INT24 field correctly', async () => {
      const dai = validSCL.querySelector('DAI[name="int24test"]');
      const element = await fixture(html`${getCustomField()[<DaiValidationTypes>'INT24']?.render(dai!)}`);

      expect(element).shadowDom.to.equalSnapshot();
      expect(element.shadowRoot?.querySelector('input')?.value).to.eql('8321');
    });

    it('renders a INT32 field correctly', async () => {
      const dai = validSCL.querySelector('DAI[name="int32test"]');
      const element = await fixture(html`${getCustomField()[<DaiValidationTypes>'INT32']?.render(dai!)}`);

      expect(element).shadowDom.to.equalSnapshot();
      expect(element.shadowRoot?.querySelector('input')?.value).to.eql('83218');
    });

    it('renders a INT64 field correctly', async () => {
      const dai = validSCL.querySelector('DAI[name="int64test"]');
      const element = await fixture(html`${getCustomField()[<DaiValidationTypes>'INT64']?.render(dai!)}`);

      expect(element).shadowDom.to.equalSnapshot();
      expect(element.shadowRoot?.querySelector('input')?.value).to.eql('-543923');
    });

    it('renders a INT128 field correctly', async () => {
      const dai = validSCL.querySelector('DAI[name="int128test"]');
      const element = await fixture(html`${getCustomField()[<DaiValidationTypes>'INT128']?.render(dai!)}`);

      expect(element).shadowDom.to.equalSnapshot();
      expect(element.shadowRoot?.querySelector('input')?.value).to.eql('-8');
    });

    it('renders a INT8U field correctly', async () => {
      const dai = validSCL.querySelector('DAI[name="int8utest"]');
      const element = await fixture(html`${getCustomField()[<DaiValidationTypes>'INT8U']?.render(dai!)}`);

      expect(element).shadowDom.to.equalSnapshot();
      expect(element.shadowRoot?.querySelector('input')?.value).to.eql('99');
    });

    it('renders a INT16U field correctly', async () => {
      const dai = validSCL.querySelector('DAI[name="int16utest"]');
      const element = await fixture(html`${getCustomField()[<DaiValidationTypes>'INT16U']?.render(dai!)}`);

      expect(element).shadowDom.to.equalSnapshot();
      expect(element.shadowRoot?.querySelector('input')?.value).to.eql('20000');
    });

    it('renders a INT24U field correctly', async () => {
      const dai = validSCL.querySelector('DAI[name="int24utest"]');
      const element = await fixture(html`${getCustomField()[<DaiValidationTypes>'INT24U']?.render(dai!)}`);

      expect(element).shadowDom.to.equalSnapshot();
      expect(element.shadowRoot?.querySelector('input')?.value).to.eql('654321');
    });

    it('renders a INT32U field correctly', async () => {
      const dai = validSCL.querySelector('DAI[name="int32utest"]');
      const element = await fixture(html`${getCustomField()[<DaiValidationTypes>'INT32U']?.render(dai!)}`);

      expect(element).shadowDom.to.equalSnapshot();
      expect(element.shadowRoot?.querySelector('input')?.value).to.eql('2');
    });

    it('renders a FLOAT32 field correctly', async () => {
      const dai = validSCL.querySelector('DAI[name="float32test"]');
      const element = await fixture(html`${getCustomField()[<DaiValidationTypes>'INT32U']?.render(dai!)}`);

      expect(element).shadowDom.to.equalSnapshot();
      expect(element.shadowRoot?.querySelector('input')?.value).to.eql('659.3');
    });

    it('renders a FLOAT64 field correctly', async () => {
      const dai = validSCL.querySelector('DAI[name="float64test"]');
      const element = await fixture(html`${getCustomField()[<DaiValidationTypes>'FLOAT64']?.render(dai!)}`);

      expect(element).shadowDom.to.equalSnapshot();
      expect(element.shadowRoot?.querySelector('input')?.value).to.eql('1111659.8');
    });

    it('renders a VisString32 field correctly', async () => {
      const dai = validSCL.querySelector('DAI[name="visstring32test"]');
      const element = await fixture(html`${getCustomField()[<DaiValidationTypes>'VisString32']?.render(dai!)}`);

      expect(element).shadowDom.to.equalSnapshot();
      expect(element.shadowRoot?.querySelector('input')?.value).to.eql('pull-ups');
    });

    it('renders a VisString64 field correctly', async () => {
      const dai = validSCL.querySelector('DAI[name="visstring64test"]');
      const element = await fixture(html`${getCustomField()[<DaiValidationTypes>'VisString64']?.render(dai!)}`);

      expect(element).shadowDom.to.equalSnapshot();
      expect(element.shadowRoot?.querySelector('input')?.value).to.eql('lat pulldown');
    });

    it('renders a VisString65 field correctly', async () => {
      const dai = validSCL.querySelector('DAI[name="visstring65test"]');
      const element = await fixture(html`${getCustomField()[<DaiValidationTypes>'VisString65']?.render(dai!)}`);

      expect(element).shadowDom.to.equalSnapshot();
      expect(element.shadowRoot?.querySelector('input')?.value).to.eql('bench press');
    });

    it('renders a VisString129 field correctly', async () => {
      const dai = validSCL.querySelector('DAI[name="visstring129test"]');
      const element = await fixture(html`${getCustomField()[<DaiValidationTypes>'VisString129']?.render(dai!)}`);

      expect(element).shadowDom.to.equalSnapshot();
      expect(element.shadowRoot?.querySelector('input')?.value).to.eql('front squat');
    });

    it('renders a VisString255 field correctly', async () => {
      const dai = validSCL.querySelector('DAI[name="visstring255test"]');
      const element = await fixture(html`${getCustomField()[<DaiValidationTypes>'VisString255']?.render(dai!)}`);

      expect(element).shadowDom.to.equalSnapshot();
      expect(element.shadowRoot?.querySelector('input')?.value).to.eql('deadlift');
    });
  });
});
