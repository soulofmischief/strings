// @flow strict
import { trailingForwardSlashes } from '@soulofmischief/regex'


export function appendForwardSlash( str: string ) {
  return `${ str.replace( trailingForwardSlashes, '' )}/`
}
