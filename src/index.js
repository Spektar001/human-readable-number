module.exports = function toReadable (number) {

	let num = Number(number);
	const newStr = num.toString().split('');
	let num1 = parseInt(newStr.slice(0,1));
	let num2 = parseInt(newStr.slice(1,2));
	let num3 = parseInt(newStr.slice(2,3));
	let sum2And3Nums = parseInt(num2.toString() + num3.toString());

	let result = [];

	let from0To19 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
	let tens = ['zero','ten', 'twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
	let hundreds = ['hundred'];

	if (num < 20) {
		result.push(from0To19[num]);
	}
	else if (num >= 20 && num < 100){
		num2 === 0 ? result.push(tens[num1]) :
		result.push(tens[num1]) + result.push(from0To19[num2]);
	}
	else if (num >= 100 && num < 1000) {
		num2 === 0 && num3 === 0 ?
		result.push(from0To19[num1]) + result.push(hundreds[0]) :
			num2 === 0 ?
			result.push(from0To19[num1]) + result.push(hundreds[0]) +
			result.push(from0To19[num3]) :
				num2 === 1 && num3 >= 1 ?
				result.push(from0To19[num1]) + result.push(hundreds[0]) +
				result.push(from0To19[sum2And3Nums]) :
					num3 === 0 ?
					result.push(from0To19[num1]) + result.push(hundreds[0]) +
					result.push(tens[num2]) :
					result.push(from0To19[num1]) + result.push(hundreds[0]) +
					result.push(tens[num2]) + result.push(from0To19[num3]);
	}

	return result.join(' ');
}

