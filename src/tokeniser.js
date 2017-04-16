export function tokeniser(input) {
  return input.split('').map(char => {
    if(char === '(') {
      return {type: 'paren', value: char}
    }
    if(char === ')') {
      return {type: 'paren', value: char}
    }
    if(/[0-9]/.test(char)) {
      return {type: 'number', value: char}
    }
    if(/[a-z]/.test(char)) {
      return {type: 'letter', value: char}
    }
  })
}
