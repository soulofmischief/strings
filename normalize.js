
/**
 * Normalize a string, including case.
 */
export function normalize( s ) {
  if ( typeof s === 'string' )
    return s.normalize().toLowerCase()
  else
    throw new Error( `"${s}" is not a string.` )
}
