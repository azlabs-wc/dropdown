/**
 * Selected value changes event type
 */
export interface SelectedChangeEventType<T> extends CustomEvent {}

/**
 * Event dispatched when the selected value changes
 * 
 * @internal
 */
export class SelectedChangeEvent<T extends any> extends CustomEvent<T> {
  get value() {
    return this.detail;
  }

  get data() {
    return this.detail;
  }

  /**
   * Creates an instance of {@see InputChangeEvent} class
   */
  constructor(type: 'change' | 'selected', value?: T) {
    super(type, {
      detail: value,
      bubbles: true,
      composed: true,
    });
  }
}
