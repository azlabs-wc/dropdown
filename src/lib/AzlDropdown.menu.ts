import { LitElement, TemplateResult, css, html } from 'lit';
import { property } from 'lit/decorators/property.js';

export class AzlDropdowMenuItem extends LitElement {
  @property({ type: String })
  content!: string | TemplateResult;

  static override get styles() {
    return [
      css`
        span,
        .dropdown-item {
          display: block;
          font-size: var(--dropdown-item-font-size, 0.8rem);
          font-weight: var(--dropdown-item-font-weight, 200);
          color: var(--dropdown-item-color, #3b3d40) !important;
        }
      `,
    ];
  }

  override render() {
    const { content } = this;
    return typeof content === 'string'
      ? html` <span class="dropdown-item">${content}</span> `
      : content;
  }
}
