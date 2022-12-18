import { css } from 'lit';

export const styles = css`
  .dropdown {
    padding: 1.2rem 0rem;
    perspective: 1000px;
    position: relative;
    display: block;
    z-index: 0;
  }

  @media (max-device-width: 425px) {
    .dropdown {
      padding: 1rem 1.3rem;
    }
  }
  @media (max-width: 425px) {
    .dropdown {
      padding: 1rem 1.3rem;
    }
  }

  @media (max-device-width: 320px) {
    .dropdown {
      padding: 0.8rem 1rem;
    }
  }
  @media (max-width: 320px) {
    .dropdown {
      padding: 0.8rem 1rem;
    }
  }
  .dropdown:hover {
    cursor: pointer;
  }

  .dropdown:hover .dropdown-menu,
  .dropdown:hover .dropdown-menu .dropdown-item,
  .dropdown:hover .dropdown-menu azl-dropdown-menu-item,
  .dropdown:hover .dropdown-menu ::slotted(*) {
    display: block;
    z-index: 100;
  }

  .dropdown:hover .dropdown-menu ::slotted(*),
  .dropdown:hover .dropdown-menu.scaleY ::slotted(*),
  .dropdown:hover .dropdown-menu.translateX ::slotted(*) {
    opacity: 1;
  }

  .dropdown-menu {
    display: none;
    opacity: 0;
    position: absolute;
    top: 70%;
    min-width: 320px;
    border: var(--dropdown-border-width, 0.05rem) solid
      var(--dropdown-border-color, #eeeeee);
    border-radius: var(--dropdown-border-radius, 0.156rem);
    box-shadow: 0.5px 0px 0px 0px var(--dropdown-box-shadow-color, #f3f3f3);
    background-color: var(--dropdown-bg-color, #fff);
    z-index: 100;
  }

  .dropdown-menu.left {
    left: var(--dropdown-menu-left-offset, 0rem);
  }

  .dropdown-menu.right {
    left: var(--dropdown-menu-right-offset, 10rem);
  }

  .dropdown-menu .dropdown-item,
  .dropdown-menu azl-dropdown-menu-item,
  .dropdown-menu ::slotted(*) {
    display: none;
    opacity: 0;
    padding: 8px 14px;
    list-style: none;
  }

  .dropdown-menu .dropdown-item:hover,
  .dropdown-menu azl-dropdown-menu-item:hover,
  .dropdown-menu ::slotted(*:hover) {
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

  .dropdown-header {
    display: flex;
    flex: 1 auto;
    flex-flow: column nowrap;
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
