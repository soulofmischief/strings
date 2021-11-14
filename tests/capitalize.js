import o from 'ospec'
import { capitalize } from '../index.js'

const n = 123

o.spec( 'capitalize', () => {
  o( 'works', () => {
    o( capitalize('test' )).equals( 'Test' )
  })

  o( 'throws on non-string', () => {
    o(() => capitalize( n )).throws( `"${n}" is not a string.` )
  })
})
