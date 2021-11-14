import { leadingForwardSlashes } from '@soulofmischief/regex'


export function removeForwardSlashPrefix( str ) {
  return str.replace( leadingForwardSlashes, '' )
}
