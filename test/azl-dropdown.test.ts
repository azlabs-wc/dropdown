import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { AzlDropdown } from '../src/AzlDropdown.js';
import '../src/azl-dropdown.js';

describe('AzlDropdown', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<AzlDropdown>(html`<azl-dropdown></azl-dropdown>`);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<AzlDropdown>(html`<azl-dropdown></azl-dropdown>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<AzlDropdown>(
      html`<azl-dropdown title="attribute title"></azl-dropdown>`
    );

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<AzlDropdown>(html`<azl-dropdown></azl-dropdown>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
