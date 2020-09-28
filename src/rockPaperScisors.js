/**
 * @file Função de `Pedra, Papel e Tesoura`.
 * @author Seu nome aqui
 * @version 1.0.0
 */

/**
 * Lê a entrada dos dois jogadores e retorna quem ganhou.
 *
 * @param {string} player1 Entrada do jogador 1.
 * @param {string} player2 Entrada do jogador 2.
 *
 * @returns {string} O resultado.
 */
module.exports = function rockPaperScisors(player1, player2) {
	let result = '';

	if (player1.toLowerCase() === 'pedra' && player2.toLowerCase() === 'tesoura') {
		result = 'jogador 1 ganhou';
	} else if (player1.toLowerCase() === 'pedra' && player2.toLowerCase() === 'papel') {
		result = 'jogador 2 ganhou';
	}

	if (player1.toLowerCase() === 'papel' && player2.toLowerCase() === 'pedra') {
		result = 'jogador 1 ganhou';
	} else if (player1.toLowerCase() === 'papel' && player2.toLowerCase() === 'tesoura') {
		result = 'jogador 2 ganhou';
	}

	if (player1.toLowerCase() === 'tesoura' && player2.toLowerCase() === 'papel') {
		result = 'jogador 1 ganhou';
	} else if (player1.toLowerCase() === 'tesoura' && player2.toLowerCase() === 'pedra') {
		result = 'jogador 2 ganhou';
	}

	if (player1.toLowerCase() === player2.toLowerCase()) {
		result = 'empate';
	}

	return result;
};
