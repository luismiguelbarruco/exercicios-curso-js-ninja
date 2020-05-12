/*
Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
métodos semelhantes aos que existem no array, mas que sirvam para os
elementos do DOM selecionados.
Crie os seguintes métodos:
- forEach, map, filter, reduce, reduceRight, every e some.

Crie também métodos que verificam o tipo do objeto passado por parâmetro.
Esses métodos não precisam depender de criar um novo elmento do DOM, podem
ser métodos estáticos.

Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
no objeto, como nos exemplos abaixo:
DOM.isArray([1, 2, 3]); // true
DOM.isFunction(function() {}); // true
DOM.isNumber('numero'); // false

Crie os seguintes métodos para verificação de tipo:
- isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
O método isNull deve retornar `true` se o valor for null ou undefined.
*/

(function(win, doc){
	'use strict';

    class DOM {
        constructor(element) {
            this.element = this.getDOMElements(element);
        }

        getDOMElements = (element) => doc.querySelectorAll(element); 

        on = (event, callback) => this.element.forEach(element => element.addEventListener(event, callback));

        off = (event, callback) => this.element.forEach(element => element.removeEventListener(event, callback));

        get = () => this.element;

        forEach = (func) => Array.prototype.forEach.call(this.element, func);

        map = (func) => Array.prototype.map.call(this.element, func);

        filter = (func) => Array.prototype.filter.call(this.element, func);

        reduce = (func) => Array.prototype.reduce.call(this.element, func);

        reduceRight = (func) => Array.prototype.reduceRight.call(this.element, func);

        every = (func) => Array.prototype.every.call(this.element, func);

        some = (func) => Array.prototype.some.call(this.element, func);

        static getArgument = (obj) => Object.prototype.toString.call(obj);
        
        static isArray = () => this.getArgument(this[0]) === '[object Array]';

        static isObject(){
            return this.getArgument(arguments[0]) === '[object Object]';
        };

        static isFunction(){
            return this.getArgument(arguments[0]) === '[object Function]';
        };

        static isNumber(){
            return this.getArgument(arguments[0]) === '[object Number]';
        };

        static isString(){
            return this.getArgument(arguments[0]) === '[object String]';
        };

        static isBoolean(){
            return this.getArgument(arguments[0]) === '[object Boolean]';
        };

        static isNull(){
            return this.getArgument(arguments[0]) === '[object Null]' || this.is(arguments[0]) === '[object Undefined]';
        };
    };

	var $a = new DOM('[data-js="link"]');

	$a.on('click', function handleClick(e) {
		e.preventDefault();
		console.log('clicou');
		$a.off('click', handleClick);
    });
    
    $a.forEach(item => console.log(item));

    $a.map(item => console.log({
        tag: item.tagName,
        text: item.firstChild.nodeValue
    }));

    console.log("isArray: " + DOM.isArray([1, 2, 3]));
    console.log("isObject: " + DOM.isObject({}));
    console.log("isObject: " + DOM.isObject([]));
    console.log("isFunction: " + DOM.isFunction(() => 1));
    console.log("isNumber: " + DOM.isNumber(10));
    console.log("isString: " + DOM.isString('ds'));
    console.log("isBoolean: " + DOM.isBoolean(true));
    console.log("isBoolean: " + DOM.isBoolean());

	console.log('Elementos selecionados:', $a.get());
	console.log('$a é filho de body?', $a.get()[0].parentNode === document.body);

})(window, document);