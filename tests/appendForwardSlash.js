import o from 'ospec'
import { appendForwardSlash } from '../index.js'


const
  str1 = 'test',
  str2 = 'test/'


o.spec( 'appendForwardSlash', () => {
  o( 'appends if missing', () => {
    o( appendForwardSlash( str1 )).equals( `${str1}/` )
  })

  o( "doesn't append if present", () => {
    o( appendForwardSlash( str2 )).equals( str2 )
  })
})
