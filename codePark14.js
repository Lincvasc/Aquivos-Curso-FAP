/*Faça uma função calculadora que os números e as operações serão feitas pelo usuário. O código deve ficar rodando infinitamente até que o usuário escolha a opção de sair. No início, o programa mostrará a seguinte lista de operações:
1: Soma
2: Subtração
3: Multiplicação
4: Divisão
0: Sair

Digite o número para a operação correspondente e caso o usuário introduza qualquer outro, o sistema deve mostrar a mensagem “Essa opção não existe” e voltar ao menu de opções.*/


function calculatora() {
    while (true) {
        const operation = parseInt(window.prompt(`
            1: Soma
            2: Subtração
            3: Multiplicação
            4: Divisão
            0: Sair
        `));

        switch (operation) {
            case 0:
                window.alert("Calculadora encerrada!");
                return;
            case 1:
                performOperation("soma");
                break;
            case 2:
                performOperation("subtração");
                break;
            case 3:
                performOperation("multiplicação");
                break;
            case 4:
                performOperation("divisão");
                break;
            default:
                window.alert("Essa opção não existe");
                break;
        }
    }
}

function performOperation(operationName) {
    const number1 = parseFloat(window.prompt("Digite o primeiro número:"));
    const number2 = parseFloat(window.prompt("Digite o segundo número:"));

    let result;
    switch (operationName) {
        case "soma":
            result = number1 + number2;
            break;
        case "subtração":
            result = number1 - number2;
            break;
        case "multiplicação":
            result = number1 * number2;
            break;
        case "divisão":
            if (number2 === 0) {
                window.alert("Não é possível dividir por zero.");
                return;
            }
            result = number1 / number2;
            break;
    }

    window.alert(`Resultado da ${operationName}: ${result}`);
}

calculatora();


