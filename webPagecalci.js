let result = document.getElementById('Calculator');

function appendNumber(number) {
    result.value += number;
}

function appendOperator(operator) {
    result.value += operator;
}

function appendDecimal() {
    if (!result.value.includes('.')) {
        result.value += '.';
    }
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = 'Error';
    }
}

function clearResult() {
    result.value = ' ';
}
