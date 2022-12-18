import { html } from 'lit';

export const chevronIcon = (
  width: number = 32,
  height: number = 32
) => html` <svg
  xmlns="http://www.w3.org/2000/svg"
  width="${width}"
  height="${height}"
  fill="currentColor"
  class="icon chevron-down"
  viewBox="0 0 16 16"
>
  <path
    fill-rule="evenodd"
    class="path"
    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
  />
</svg>`;
