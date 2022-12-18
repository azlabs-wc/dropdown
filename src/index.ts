import { Dropdown } from './lib/AzlDropdown.js';

declare global {
  interface HTMLElementTagNameMap {
    'azl-dropdown': Dropdown;
  }
}

export { Dropdown };
