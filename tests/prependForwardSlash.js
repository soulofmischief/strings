import o from 'ospec'
import { prependForwardSlash } from '../src'


const
  str1 = 'test',
  str2 = '/test'


o.spec( 'prependForwardSlash', () => {
  o( 'prepends if missing', () => {
    o( prependForwardSlash( str1 )).equals( `/${str1}` )
  })

  o( "doesn't prepend if present", () => {
    o( prependForwardSlash( str2 )).equals( str2 )
  })
})
