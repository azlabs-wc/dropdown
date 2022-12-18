import { AzlDropdown } from './lib/AzlDropdown.js';
import { AzlDropdowMenuItem } from './lib/AzlDropdown.menu.js';
import { SelectedChangeEventType } from './lib/Events.js';

declare global {
  interface HTMLElementTagNameMap {
    'azl-dropdown': AzlDropdown;
  }
  interface HTMLElementTagNameMap {
    'azl-dropdown-menu-item': AzlDropdowMenuItem;
  }
}

export { AzlDropdown, AzlDropdowMenuItem, SelectedChangeEventType };
