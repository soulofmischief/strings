import o from 'ospec'
import { shortID } from '../index.js'


const
  id1 = shortID(),
  id2 = shortID()


o.spec( 'shortID', () => {
  o( 'is unique', () => {
    o( id1 ).notEquals( id2 )
  })

  o( 'is six letters, digits, hyphens or underscores', () => {
    o( /^[a-zA-Z0-9\-_]{6}$/.test( id1 )).equals( true )
    o( /^[a-zA-Z0-9\-_]{6}$/.test( id2 )).equals( true )
  })
})
