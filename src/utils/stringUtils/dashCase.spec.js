import dashCase from './dashCase'

describe('dashCase', () => {
  it('makes the words lower case', () => {
    const text = 'lOwErCaSe'

    expect(dashCase(text)).toBe('lowercase')
  })

  it('replaces spaces with dashes', () => {
    const text = 'spaces with dashes'

    expect(dashCase(text)).toBe('spaces-with-dashes')
  })

  it('makes lower case words with spaces and dases', () => {
    const text = 'sPaCeS wItH dAsHeS'

    expect(dashCase(text)).toBe('spaces-with-dashes')
  })
})