module.exports = function reverse (n) {
	const num = Math.abs(n);
	const numb = Number(num.toString().split('').reverse().join(''));
    return numb 
}
