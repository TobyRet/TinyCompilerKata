import {tokeniser} from "../src/tokeniser";
import {expect} from "chai";
import {assert} from "mocha";

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
    it('recognises single numbers from 0-9', () => {
      const input = '1'
      const expectedToken = [{
        type: 'number',
        value: '1'
      }]

      expect(tokeniser(input)).to.eql(expectedToken)
    })

    it('recognises larger numbers', () => {
      const input = '123'
      const expectedToken = [{
        type: 'number',
        value: '123'
      }]

      expect(tokeniser(input)).to.eql(expectedToken)
    })
  })

  describe('Functions', () => {
    it('regonises functions', () => {
      const input = 'add'
      const expectedToken = [{
        type: 'function',
        value: input
      }]

      expect(tokeniser(input)).to.eql(expectedToken)
    })
  })

  describe('Strings', () => {
    it('recognises strings as parameters', () => {
      const input = '"thing"'
      const expectedToken = [
        {
          type: 'string',
          value: "thing"
        }
      ]

      expect(tokeniser(input)).to.eql(expectedToken)
    })
  })

  describe('Whitespace', () => {
    it('recognises whitespace', () => {
      const input = ' '
      const expectedToken = [
        {
          type: 'space',
          value: ' '
        }
      ]

      expect(tokeniser(input)).to.eql(expectedToken)
    })
  })

  describe('Unrecognisable characters', () => {
    it('throws an error', () => {
      const input = '!'
      expect(() => tokeniser(input)).to.throw(Error, /Unrecognisable character: !/)
    })
  })
})
