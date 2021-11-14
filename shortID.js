import { nanoid } from 'nanoid'


/**
 * Generate random short ID using nanoid.
 * Useful for namespacing IDs for forms, menus, etc.
 */
export function shortID({ underscore = false } = {}) {
  return underscore ? `_${ nanoid( 6 )}` : nanoid( 6 )
}
