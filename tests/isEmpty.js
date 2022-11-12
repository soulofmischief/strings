import o from 'ospec'
import { isEmpty } from '../index.js'


o.spec( 'isNonEmpty', () => {
  o( 'recognizes empty string', () => {
    o( isEmpty( '' )).equals( true )
  })

  o( 'recognizes whitespace as empty', () => {
    o( isEmpty( '   ' )).equals( true )
  })

  o( 'recognizes non-empty string', () => {
    o( isEmpty( '   abc   ' )).equals( false )
  })
})
