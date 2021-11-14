
const
  hasExtension = /[.]/,
  lastExtension = /[^.]+$/


export function getFileExtension( filename ) {
  return (
  ( hasExtension.exec( filename ))
    ? lastExtension.exec( filename )[0]
    : ''
  )
}
