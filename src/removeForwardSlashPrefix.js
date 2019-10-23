// @flow strict
import { leadingForwardSlashes } from '@soulofmischief/regex'


export function removeForwardSlashPrefix( str: string ) {
  return str.replace( leadingForwardSlashes, '' )
}
