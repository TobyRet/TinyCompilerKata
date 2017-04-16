import {tokeniser} from "../src/tokeniser";
import {expect} from "chai";

describe('Tokeniser', () => {
  describe('Parenthesis', ()=> {
    it('recognises a left parenthesis', () => {
      const input = '('
      const expectedToken = [{
        type: 'paren',
        value: '('
      }]
      expect(tokeniser(input)).to.eql(expectedToken)
    })

    it('recognises a right parenthesis', () => {
      const input = ')'
      const expectedToken = [{
        type: 'paren',
        value: ')'
      }]
      expect(tokeniser(input)).to.eql(expectedToken)
    })

    it('recognises a left and right parenthesis', () => {
      const input = '()'
      const expectedToken = [
        {
          type: 'paren',
          value: '('
        },
        {
          type: 'paren',
          value: ')'
        }
      ]
      expect(tokeniser(input)).to.eql(expectedToken)
    })
  })
})
