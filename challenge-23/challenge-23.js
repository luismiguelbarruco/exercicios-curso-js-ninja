/*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:

- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;

- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/


(function(win, doc){
    'use strict';

    let $inputResult = doc.querySelector('input');
    let $butonsNumbers = doc.querySelectorAll('[data-js="btn-number"]');
    let $butonsOperations = doc.querySelectorAll('[data-js="btn-operacao"]');
    let $buttonCE = doc.querySelector('[data-js="btn-ce"]');
    let $buttonResult = doc.querySelector('[data-js="btn-resultado"]');

    let lastIndexInput = $inputResult.value.length - 1;

    function initialize(){
        initEvents();
    };

    function initEvents(){
        $butonsNumbers.forEach($button => {
            $button.addEventListener('click', _ => handleClickNumber($button));
        });
    
        $butonsOperations.forEach($button => {
            $button.addEventListener('click', _ => handleClicOperator($button));
        });
    
        $buttonCE.addEventListener('click', _ => $inputResult.value = "");
    
        $buttonResult.addEventListener('click', _ => {
            if($inputResult.value)
    
            $inputResult.value = eval($inputResult.value);
        });
    }

    function handleClickNumber($button){
        if($inputResult.value.substring($inputResult.value.length - 1, $inputResult.value.length) === '0')
            return;

        $inputResult.value += $button.value;
    }

    function handleClicOperator($button){
        lastIndexInput = $inputResult.value.length;
        let lastInput = $inputResult.value.substring(lastIndexInput - 1, lastIndexInput);

        if($inputResult.value.substring(lastIndexInput - 1, lastIndexInput) === $button.value)
            return;

        if(isNaN(lastInput))
            $inputResult.value = $inputResult.value.substring(0, lastIndexInput - 1);
        
        $inputResult.value += $button.value;
    }

    initialize();
})(window, document);