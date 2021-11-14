import { trailingForwardSlashes } from '@soulofmischief/regex'


export function appendForwardSlash( s ) {
  return `${ s.replace( trailingForwardSlashes, '' )}/`
}
