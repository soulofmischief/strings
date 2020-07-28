// @flow strict


export function getFileExtension( filename: string ) {
  return (
  ( /[.]/.exec( filename ))
    ? /[^.]+$/.exec( filename )[0]
    : ''
  )
}
