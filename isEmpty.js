

/**
 * Determine is the given value is an empty string.
 */
export function isEmpty( string ) {
  if ( typeof string !== 'string' )
    throw new TypeError( 'Expected a string' )

  return !string.trim()
}
