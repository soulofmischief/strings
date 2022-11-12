import o from 'ospec'
import { isNonEmpty } from '../index.js'


o.spec( 'isNonEmpty', () => {
  o( 'recognizes valid string', () => {
    o( isNonEmpty( '   abc   ' )).equals( true )
  })

  o( 'recognizes empty string', () => {
    o( isNonEmpty( '' )).equals( false )
  })

  o( 'recognizes whitespace as empty', () => {
    o( isNonEmpty( '   ' )).equals( false )
  })
})
