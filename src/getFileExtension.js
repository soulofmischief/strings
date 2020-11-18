

const
  hasExtension = /[.]/,
  lastExtension = /[^.]+$/


export function getFileExtension( filename: string ) {
  return (
  ( hasExtension.exec( filename ))
    ? lastExtension.exec( filename )[0]
    : ''
  )
}
