// Copyright by Undisclosed Author(s) of Unknown Origin
// Copyright (c) 2018-2020, The TurtleCoin Developers
//
// Please see the included LICENSE file for more information.

'use strict'

const assert = require('assert')
const describe = require('mocha').describe
const it = require('mocha').it
const Mnemonics = require('../').Mnemonics

describe('Test Mnemonics', () => {
    const expectedSeed = '38b22f9e423479e3847b34cdfde00dcdaae91633d9f4c1e7b12c7c3a8e53d103'
    const expectedMnemonic = 'sipped nodes dice soprano factual cool wickets bypass vibrate anecdote envy aquarium casket glass mocked jolted biplane adopt candy evolved lively daytime impel irate factual'

    it('Seed to Mnemonics', () => {
        const words = Mnemonics.encode(expectedSeed)

        assert(words === expectedMnemonic)
    })

    it('Mnemonic to Seed', () => {
        const seed = Mnemonics.decode(expectedMnemonic)

        assert(seed === expectedSeed)
    })

    it('Get Random Bytes (32-bit)', () => {
        const rnd1 = Mnemonics.random(32)
        const rnd2 = Mnemonics.random(32)

        assert(rnd1 !== rnd2)
    })

    it('Get Random Bytes (256-bit)', () => {
        const rnd1 = Mnemonics.random(256)
        const rnd2 = Mnemonics.random(256)

        assert(rnd1 !== rnd2)
    })

    it('Calculate checksum of words', () => {
        const words = 'stunning cool hexagon criminal dabbing dads magically enjoy ourselves ingesting ongoing southern green cigar serving pheasants pawnshop mystery powder sizes randomly melting custom kernels'.split(' ')

        const finalWord = Mnemonics.calculate_checksum(words);

        words.push(finalWord);

        const seed = Mnemonics.decode(words.join(' '));

        assert(seed === '373f6c36eba42800508ac55f6a20e23033318e9dd80004ead04e4beb2fde2a4a');
    })
})
