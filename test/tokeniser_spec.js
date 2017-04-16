import {tokeniser} from "../src/tokeniser";
import {expect} from "chai";

describe('Tokeniser', () => {
  describe('Parenthesis', () => {
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
  describe('Numbers', () => {
    it('recognises numbers from 0-9', () => {
      const input = '1'
      const expectedToken = [{
        type: 'number',
        value: '1'
      }]

      expect(tokeniser(input)).to.eql(expectedToken)
    })
    it('recognises numbers from 0-9 and parenthesis', () => {
      const input = '(29)'
      const expectedToken = [
        {
          type: 'paren',
          value: '('
        },
        {
          type: 'number',
          value: '2'
        },
        {
          type: 'number',
          value: '9'
        },
        {
          type: 'paren',
          value: ')'
        }
      ]

      expect(tokeniser(input)).to.eql(expectedToken)
    })
  })
  describe('Letters', () => {
    it('recognises letters from a-z', () => {
      const input = 'a'
      const expectedToken = [{
        type: 'letter',
        value: 'a'
      }]

      expect(tokeniser(input)).to.eql(expectedToken)
    })
    it('recognises numbers from a-z and parenthesis', () => {
      const input = '(add)'
      const expectedToken = [
        {
          type: 'paren',
          value: '('
        },
        {
          type: 'letter',
          value: 'a'
        },
        {
          type: 'letter',
          value: 'd'
        },
        {
          type: 'letter',
          value: 'd'
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
