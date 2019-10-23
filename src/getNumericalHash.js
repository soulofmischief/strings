// @flow strict


export function getNumericalHash( string = '' ) {
  // Initialize hash value
  let hash = 0
  // Return if the string is empty.
  if ( string.length === 0 ) return hash


  for ( let i = 0; i < string.length; i++ ) {
    hash = string.charCodeAt( i ) + (( hash << 5 ) - hash )
    hash = hash & hash // Convert to 32bit integer
  }
  return hash
}
