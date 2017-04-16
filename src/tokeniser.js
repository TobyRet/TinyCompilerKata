export function tokeniser(input) {
  return input.split('').map(char => {
    if(char === '(') {
      return {type: 'paren', value: '('}
    }
    if(char === ')') {
      return {type: 'paren', value: ')'}
    }
  })
}
