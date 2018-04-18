/* global describe, expect, it */
import { splitQuery } from './AuthorSearch'

describe('splitQuery', () => {
  it('splits query into first-last object', () => {
    expect(splitQuery('Mark Twain')).toEqual({
      first: 'Mark',
      last: 'Twain'
    })
    expect(splitQuery('Gabriel Garcia Marquez')).toEqual({
      first: 'Gabriel',
      last: 'Garcia Marquez'
    })
    expect(splitQuery('Simone de Beauvoir')).toEqual({
      first: 'Simone',
      last: 'de Beauvoir'
    })
  })

  it('trims white space', () => {
    expect(splitQuery(' Mark Twain')).toEqual({
      first: 'Mark',
      last: 'Twain'
    })
    expect(splitQuery('    Mark Twain')).toEqual({
      first: 'Mark',
      last: 'Twain'
    })
    expect(splitQuery('Mark Twain  ')).toEqual({
      first: 'Mark',
      last: 'Twain'
    })
    expect(splitQuery(' Mark Twain ')).toEqual({
      first: 'Mark',
      last: 'Twain'
    })
  })

  it('handles only one name', () => {
    expect(splitQuery('Mark')).toEqual({
      first: 'Mark',
      last: null
    })
    expect(splitQuery('   Mark')).toEqual({
      first: 'Mark',
      last: null
    })
    expect(splitQuery('Mark ')).toEqual({
      first: 'Mark',
      last: null
    })
  })
})
