import '@azlabs-wc/layouts/azl-hbox.js';
import { LitElement, PropertyValueMap, TemplateResult, css, html } from 'lit';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import { ClassInfo, classMap } from 'lit/directives/class-map.js';
import { repeat } from 'lit/directives/repeat.js';
import '../azl-dropdown-menu.js';
import {
  scaleY,
  translateToLeft,
  translateToRight,
  translateZ,
} from './AzlDropdown.animation.style.js';
import { styles as defaultStyles } from './AzlDropdown.style.js';
import { SelectedChangeEvent } from './Events.js';
import { chevronIcon } from './Icon.js';
import { createDropDownMenuItemIterator } from './helpers.js';
import { Animation, Orientation } from './types.js';

export class AzlDropdown extends LitElement {
  // #region Component reactive properties
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

  /**
   * @attr items
   */
  @property({ attribute: 'items' })
  items!: (string | TemplateResult)[] | string;

  /**
   * @attr selected
   */
  @property({ type: Number, attribute: 'selected' })
  @state()
  selectedIndex!: number;

  /**
   * @attr selected
   */
  @property({ type: Number, attribute: 'selected' })
  @state()
  selectedItem!: any;
  // #endregion Component reactive properties

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

  private setSelectedItem(value: any) {
    if (this.items) {
      this.selectedIndex = +value;
      this.selectedItem = this.items[this.selectedIndex];
      if (this.selectedItem) {
        this.dispatchEvent(
          new SelectedChangeEvent(
            'change',
            this.selectedItem ?? this.selectedIndex
          )
        );
      }
    }
  }

  protected override willUpdate(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    if (
      _changedProperties.has('orientation') ||
      _changedProperties.has('orientation')
    ) {
      // TODO: Change the orientation if required
    }
    super.willUpdate(_changedProperties);
  }

  private getMenuClass() {
    let classes: ClassInfo = {};
    if (this.orientation) {
      classes = { [this.orientation]: true };
    }
    if (this.animation) {
      classes = { ...classes, [this.animation]: true };
    }
    return classes;
  }

  private getCssClass() {
    let cssClass: ClassInfo = {};
    const list = this.cssClass ?? '';
    for (const item of list.split(' ')) {
      cssClass = { ...cssClass, [item]: true };
    }
    return cssClass;
  }

  private static createDropdownHeader(text?: string) {
    return text
      ? html`<azl-hbox align-items="flex-start"
          >${text} ${chevronIcon(16, 16)}</azl-hbox
        >`
      : html`<slot name="dropdown-button"></slot>
          <slot name="dropdown-icon"></slot>`;
  }

  private static createDropdownMenu(
    selectedFunc: (value: unknown) => void,
    items: (string | TemplateResult)[]
  ) {
    return items.length !== 0
      ? html`${repeat(
          createDropDownMenuItemIterator(items),
          item => item.index,
          (item, index) => html`
            <azl-dropdown-menu-item
              @click=${(e: Event) => {
                selectedFunc(index);
                e.preventDefault();
              }}
              .content=${item.item}
            ></azl-dropdown-menu-item>
          `
        )}`
      : html`<slot></slot>`;
  }

  override render() {
    const items =
      typeof this.items === 'string'
        ? this.items.split(',').filter(item => item.trim())
        : this.items;
    return html`
      <div class="dropdown ${classMap(this.getCssClass())}">
        <div class="dropdown-header">
          ${AzlDropdown.createDropdownHeader(this.text)}
        </div>
        <div class="dropdown-menu${classMap(this.getMenuClass())}">
          ${AzlDropdown.createDropdownMenu(
            this.setSelectedItem.bind(this),
            items ?? []
          )}
        </div>
      </div>
    `;
  }
}
