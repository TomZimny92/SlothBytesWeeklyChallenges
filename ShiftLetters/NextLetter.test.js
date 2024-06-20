
const nextTest = require('./NextLetter.js')

test('Prints out string with the next letter in the alphabet', () => {
    expect(nextTest('hello')).toBe('ifmmp')
    expect(nextTest('cells interlinked')).toBe('dfmmt joufsmjolfe')
})

