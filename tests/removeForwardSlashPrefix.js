import o from 'ospec'
import { removeForwardSlashPrefix } from '../index.js'


const str = 'test'

o.spec( 'removeForwardSlashPrefix', () => {
  o( 'removes multiple', () => {
    o( removeForwardSlashPrefix( `////${str}` )).equals( str )
  })
})
