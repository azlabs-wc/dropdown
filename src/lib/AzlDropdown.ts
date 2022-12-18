import '@azlabs-wc/layouts/azl-hbox.js';
import { LitElement, css, html } from 'lit';
import { property } from 'lit/decorators/property.js';
import { ClassInfo, classMap } from 'lit/directives/class-map.js';
import {
  scaleY,
  translateToLeft,
  translateToRight,
  translateZ,
} from './AzlDropdown.animation.style.js';
import { styles as defaultStyles } from './AzlDropdown.style.js';
import { chevronIcon } from './Icon.js';
import { Animation, Orientation } from './types.js';

export class Dropdown extends LitElement {
  //#region Component reactive properties
  /**
   * @attr
   */
  @property({ type: String, attribute: 'orientation' })
  orientation: Orientation = 'right';
  /**
   * @attr
   */
  @property({ type: String, attribute: 'animation' })
  animation: Animation = 'scaleY';
  /**
   * @attr
   */
  @property({ type: String })
  text!: string;
  /**
   * @attr
   */
  @property({ type: String, attribute: 'class' })
  cssClass!: string;
  //#endregion Component reactive properties

  static override get styles() {
    return [
      defaultStyles,
      scaleY,
      translateToLeft,
      translateToRight,
      translateZ,
      css``,
    ];
  }

  getMenuClass() {
    let classes: ClassInfo = {};
    if (this.orientation) {
      classes = { [this.orientation]: true };
    }
    if (this.animation) {
      classes = { ...classes, [this.animation]: true };
    }
    return classes;
  }

  createDropdownSlot() {
    return html` <slot name="dropdown-button"></slot>
      <slot name="dropdown-icon"></slot>`;
  }

  override render() {
    const menuClasses = this.getMenuClass();
    let cssClass: ClassInfo = {};
    const list = this.cssClass ?? '';
    for (const item of list.split(' ')) {
      cssClass = { ...cssClass, [item]: true };
    }
    return html`
      <div class="dropdown ${classMap(cssClass)}">
        <div class="dropdown-header">
          <azl-hbox align-items="flex-start">
            ${this.text
              ? `${this.text} ${chevronIcon(16, 16)}`
              : this.createDropdownSlot()}
          </azl-hbox>
        </div>
        <div class="dropdown-menu${classMap(menuClasses)}">
          <slot></slot>
        </div>
      </div>
    `;
  }
}
