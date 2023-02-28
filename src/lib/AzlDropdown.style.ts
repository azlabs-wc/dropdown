import { css } from 'lit';

export const styles = css`
  .dropdown-container {
    position: relative;
  }

  .dropdown {
    padding-bottom: var(--dropdown-padding-bottom, 0.7rem);
    display: block;
  }

  .dropdown-header {
    text-decoration: none;
    background-color: inherit;
  }
  .dropdown-header:active,
  .dropdown-header:link,
  .dropdown-header:visited,
  .dropdown-header:hover {
    color: inherit;
    text-decoration: none;
  }

  .dropdown-text,
  ::slotted(dropdown-button) {
    transition: all 2000ms ease-in;
  }

  .dropdown:hover {
    cursor: pointer;
  }

  .dropdown.hover:hover .dropdown-menu,
  .dropdown.hover:hover .dropdown-menu .dropdown-item,
  .dropdown.hover:hover .dropdown-menu azl-dropdown-menu-item,
  .dropdown.hover:hover .dropdown-menu ::slotted(*),
  .dropdown.active .dropdown-menu,
  .dropdown.active .dropdown-menu .dropdown-item,
  .dropdown.active .dropdown-menu azl-dropdown-menu-item,
  .dropdown.active .dropdown-menu ::slotted(*) {
    display: block;
  }

  .dropdown.hover:hover .dropdown-menu ::slotted(*),
  .dropdown.hover:hover .dropdown-menu.scaleY ::slotted(*),
  .dropdown.hover:hover .dropdown-menu.translateX ::slotted(*),
  .dropdown.active .dropdown-menu ::slotted(*),
  .dropdown.active .dropdown-menu.scaleY ::slotted(*),
  .dropdown.active .dropdown-menu.translateX ::slotted(*) {
    opacity: 1;
  }

  .dropdown-menu {
    display: none;
    opacity: 0;
    position: absolute;
    min-width: var(--dropdown-min-width, 240px);
    border: var(--dropdown-border-width, 0.05rem) solid
      var(--dropdown-border-color, hsl(198deg, 0%, 80%));
    border-radius: var(--dropdown-border-radius, 0.156rem);
    box-shadow: 0.5px 0px 0px 0px var(--dropdown-box-shadow-color, #f3f3f3);
    background-color: var(--dropdown-bg-color, #fff);
    z-index: 1050;
  }

  .dropdown-menu.left {
    left: var(--dropdown-menu-left-offset, 0rem);
  }

  .dropdown-menu.right {
    left: var(--dropdown-menu-right-offset, 10rem);
  }

  .dropdown-menu .dropdown-item,
  .dropdown-menu azl-dropdown-menu-item {
    padding: var(--dropdown-menu-item-padding, 0.5rem);
    display: none;
    opacity: 0;
    height: auto;
    line-height: inherit;
    list-style: none;
  }

  .dropdown-menu .dropdown-item:hover,
  .dropdown-menu azl-dropdown-menu-item:hover {
    background-color: var(
      --dropdown-menu-item-hover-color,
      rgba(40, 39, 39, 0.1)
    );
  }

  .scaleY,
  .scaleY .dropdown-item,
  .scaleY azl-dropdown-menu-item,
  .scaleY ::slotted(*) {
    animation: scaleY 300ms ease-in-out forwards;
    transform-origin: top center;
  }

  .translateX.left,
  .translateX.left .dropdown-item,
  .translateX.left azl-dropdown-menu-item,
  .translateX.left ::slotted(*) {
    animation: translateToLeft 420ms 100ms ease-in-out forwards;
    transform-origin: top center;
  }

  .translateX.right,
  .translateX.right .dropdown-item,
  .translateX.right azl-dropdown-menu-item,
  .translateX.right ::slotted(*) {
    animation: translateToRight 420ms 100ms ease-in-out forwards;
    transform-origin: top center;
  }

  /* Icon and & svg styling */
  .icon,
  ::slotted(svg) {
    position: relative;
    top: 0.168rem;
  }
  .icon .path,
  ::slotted(svg) .path {
    color: var(--icon-fill-color, inherit);
    fill: var(--icon-fill-color, inherit);
  }
`;
