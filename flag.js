"use strict";

const chalk = require('chalk');

const blue = chalk.bgBlue("  ");
const star = chalk.bgBlue.white(" ★ ");
const smallBlue = chalk.bgBlue(" ");
const bigBlue = chalk.bgBlue("  ");
const red = chalk.bgRed(" ");
const white = chalk.bgWhite(" ");


let sevenStarLine = star.repeat(7) + red.repeat(29);
let sixStarLine = smallBlue + star.repeat(6) + smallBlue +smallBlue + white.repeat(29);
let whiteLine = white.repeat(50);
let redLine = red.repeat(50);


for (let i = 0; i <= 12; i++) {
	if (i === 0 || i === 2 || i === 4 || i === 6) {
		console.log(sevenStarLine);
	} else if (i === 1 || i === 3 || i === 5) {
		console.log(sixStarLine);
	} else if (i === 7 || i === 9 || i === 11) {
		console.log(whiteLine);
	} else {
		console.log(redLine);
	}
}

