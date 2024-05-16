const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Deck } = require('.')
const db = require('../db/config')



describe('Deck', () => {
    it('has an id', async () => {
        const deck = await Deck.create({id: 1, name: 'main'});
      expect(deck.id).toHaveProperty('id')
    })

})