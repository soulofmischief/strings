// @flow strict
import { leadingForwardSlash } from '@soulofmischief/regex'


export function prependForwardSlash( str: string ) {
  return `/${ str.replace( leadingForwardSlash, '' )}`
}
