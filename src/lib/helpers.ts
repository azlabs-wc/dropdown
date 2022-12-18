import { TemplateResult } from 'lit';

/**
 * Creates an iterable of template result / javascript string
 * @internal
 */
export function* createDropDownMenuItemIterator(
  items: (string | TemplateResult)[]
) {
  for (const item of items) {
    yield { item, index: items.indexOf(item) };
  }
}
