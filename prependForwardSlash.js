import { leadingForwardSlash } from '@soulofmischief/regex'


export function prependForwardSlash( str ) {
  return `/${ str.replace( leadingForwardSlash, '' )}`
}
