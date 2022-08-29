import o from 'ospec'
import { pluralize } from '../index.js'

const str = 'test'

o.spec( 'pluralize', () => {
  o( 'works', () => {
    o( pluralize( str, -1 )).equals( str + 's' )
    o( pluralize( str,  0 )).equals( str + 's' )
    o( pluralize( str,  1 )).equals( str )
    o( pluralize( str,  2 )).equals( str + 's' )
  })
})
