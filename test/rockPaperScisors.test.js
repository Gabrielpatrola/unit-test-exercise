/**
 * @file Teste da função `Pedra, Papel e Tesoura`.
 * @author Gabriel Augusto 'Patrola' Almeida
 * @version 1.0.0
 */
const tap = require('tap');
const rps = require('../src/rockPaperScisors.js');

tap.test('Empates', (assert) => {
	assert.equal(rps('papel', 'papel'), 'empate');
	assert.equal(rps('pedra', 'pedra'), 'empate');
	assert.equal(rps('tesoura', 'tesoura'), 'empate');

	assert.end();
});

tap.test('Jogador 1 ganha', (assert) => {
	assert.equal(rps('pedra', 'tesoura'), 'jogador 1 ganhou');
	assert.equal(rps('tesoura', 'papel'), 'jogador 1 ganhou');
	assert.equal(rps('papel', 'pedra'), 'jogador 1 ganhou');

	assert.end();
});

tap.test('Jogador 2 ganha', (assert) => {
	assert.equal(rps('tesoura', 'pedra'), 'jogador 2 ganhou');
	assert.equal(rps('papel', 'tesoura'), 'jogador 2 ganhou');
	assert.equal(rps('pedra', 'papel'), 'jogador 2 ganhou');

	assert.end();
});

tap.test('Erros', (assert) => {
	assert.throws(() => { rps('', 'papel'); });
	assert.throws(() => { rps('banana', 'pedra'); });
	assert.throws(() => { rps('tesoura', 'maça'); });
	assert.throws(() => { rps('maça', 'maça'); });
	assert.throws(() => { rps('', ''); });

	assert.end();
});
