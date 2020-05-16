import { nanoid } from 'nanoid'

/**
 * Generate random short ID using nanoid.
 * Useful for namespacing IDs for forms, menus, etc.
 */
export function shortID(
  { underscore = false }: {
    underscore: boolean // Append underscore to ID
  } = {}
) {
  return underscore ? `_${ nanoid( 6 )}` : nanoid( 6 )
}
