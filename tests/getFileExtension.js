import o from 'ospec'
import { getFileExtension } from '../index.js'


o.spec( 'getFileExtension', () => {
  o( 'empty on undefined', () => {
    o( getFileExtension( undefined )).equals( '' )
  })

  o( 'empty if no extension', () => {
    o( getFileExtension( 'test' )).equals( '' )
  })


  o( 'gets correct extension', () => {
    o( getFileExtension( 'test.png' )).equals( 'png' )
  })

  o( 'gets only last extension', () => {
    o( getFileExtension( 'test.png.jpg' )).equals( 'jpg' )
  })
})
