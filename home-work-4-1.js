const showMessage = (sum, i, computationHistory) => {
	alert('Средняя зп будет равна: ' + sum / i + '. \nИстория вычислений: ' + computationHistory.slice(0, -2) + '\nСумма: ' + sum + '.')
}
let sum = 0
let computationHistory = ''
const calculationOfWages = function (i) {
	if (i === 0) {
		message = 'Ведите значение заработной платы';
	} else {
		message = 'Средняя зп будет равна: ' + sum / i + '. \nИстория вычислений: ' + computationHistory.slice(0, -2) + '\nСумма: ' + sum + '.\nВедите значение заработной платы';
	}
	
	let wage = prompt (message)
	
	if (wage === '' || isNaN(wage)) {
		if(confirm('Невалидное значение. Выйти из приложения?')){
			showMessage (sum, i, computationHistory)
			return
		}
		i--
	} else {
		
		if (wage === null) {
			showMessage (sum, i, computationHistory)
			return
		}
		
		computationHistory += wage + 'рублей + ';
		wage = Number(wage)
		sum += wage;
	}
	i++;
	calculationOfWages(i);
}
calculationOfWages (0);