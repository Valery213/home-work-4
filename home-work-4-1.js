let sum = 0
let computationHistory = ''
for (let i = 0; i < 12; i++) {
    let message = ''
    if (i === 0) {
        message = 'Ведите значение заработной платы';
    } else {
        message = 'Средняя зп будет равна: ' + sum / i + '. \nИстория вычислений: ' + computationHistory.slice(0, -2) + '\nСумма: ' + sum + '.\nВедите значение заработной платы';
    }
    let wage = prompt (message)
    if (wage === '' || isNaN(wage)) {
        if(confirm('Невалидное значение. Выйти из приложения?')){
            break
        }
        i--
    } else {
        if (wage === null) {
            break
        }
        computationHistory += wage + 'рублей + ';
        wage = Number(wage)
        sum += wage;
    }
}
alert('Средняя зп будет равна: ' + sum / 12 + '. \nИстория вычислений: ' + computationHistory.slice(0, -2) + '\nСумма: ' + sum + '.')