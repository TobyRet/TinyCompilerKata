export function tokeniser(input) {
  const NUMBERS = /[0-9]/
  const LETTERS = /[a-z]/
  const UNRECOGNISED_CHARACTERS = /[^0-9a-zA-Z()"\s]/

  let current = 0
  let char = input[current]
  let tokens = []

  function tokeniseLeftParen() {
    if (char === '(') {
      tokens.push({
        type: 'paren',
        value: '('
      })
    }
  }

  function tokeniseWhitespace() {
    if (/\s/.test(char)) {
      tokens.push({
        type: 'space',
        value: ' '
      })
    }
  }

  function tokeniseRightParen() {
    if (char === ')') {
      tokens.push({
        type: 'paren',
        value: ')'
      })
    }
  }

  function tokeniseString() {
    if(char === '"') {
      let value = ''
      char = input[++current]
      while(LETTERS.test(char)) {
        value += char
        char = input[++current]
      }

      tokens.push({
        type: 'string',
        value: value
      })
    }
  }

  function tokeniseFunction() {
    if(LETTERS.test(char)) {
      let value = ''

      while(LETTERS.test(char)) {
        if(char === undefined) {
          break
        }
        value += char
        char = input[++current]
      }

      tokens.push({
        type: 'function',
        value: value
      })
    }
  }

  function tokeniseNumber() {
    if(NUMBERS.test(char)) {
      let value = ''
      while(NUMBERS.test(char)) {
        value += char
        char = input[++current]
      }
      tokens.push({
        type: 'number',
        value: value
      })
    }
  }

  while (current < input.length) {
    tokeniseLeftParen()
    tokeniseRightParen()
    tokeniseWhitespace()
    tokeniseString()
    tokeniseFunction()
    tokeniseNumber()

    if(UNRECOGNISED_CHARACTERS.test(char)) {
      throw Error('Unrecognisable character: ' + char)
    }

    char = input[++current]
  }

  return tokens
}

