import o from 'ospec'
import { isID } from '../index.js'


const
  id = '1234567890abcdef',
  invalid = '!@#$%^&*()',
  tooLong = `${id}g`,
  tooShort = `${id.substr( 1 )}`

o.spec( 'isID', () => {
  o( 'matches ID', () => {
    o( isID( id )).equals( true )
  })

  o( "doesn't match non-alphanumerical string", () => {
    o( isID( invalid )).equals( false )
  })

  o( "doesn't match wrong length", () => {
    o( isID( tooLong )).equals( false )
    o( isID( tooShort )).equals( false )
  })
})
