import o from 'ospec'
import { normalize } from '../index.js'

const n = 123

o.spec( 'normalize ', () => {
  o( 'works', () => {
    o( normalize( 'tEsT' )).equals( 'test' )
  })

  o( 'throws on non-string', () => {
    o(() => normalize( n )).throws( `"${n}" is not a string.` )
  })
})
