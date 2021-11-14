
export function capitalize( s ) {
  if ( typeof s !== 'string' )
    throw new Error( `"${s}" is not a string.` )

  return s.charAt( 0 ).toUpperCase() + s.slice( 1 )
}
