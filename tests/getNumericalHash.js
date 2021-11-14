import o from 'ospec'
import { getNumericalHash } from '../index.js'


o.spec( 'getNumericalHash', () => {
  o( 'works', () => {
    o( getNumericalHash( 'test' )).equals( 3556498 )
    o( getNumericalHash( 'test2' )).equals( 110251488 )
  })
})
