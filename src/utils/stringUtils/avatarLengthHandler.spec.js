import avatarLengthHandler from './avatarLengthHandler'

describe('avatarLengthHandler', () => {
  it('returns the capitalized if the word is <= 4 characters', () => {
    expect(avatarLengthHandler('word')).toBe('Word')
  })

  it('returns the capitilized first letter if the word is > 4 characters', () => {
    expect(avatarLengthHandler('words')).toBe('W')
  })
})